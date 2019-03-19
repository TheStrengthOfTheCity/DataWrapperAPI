'use strict';

var { Pool } = require('pg');

var createError = require('../utils/error').createError;
var stall = require('../utils/stall').stall;

var thePool = null;
var theConfig = null;

var request = require('request');

exports.errors = {
    PARAMETER_ERROR:-1,
    DATABASE_ERROR:-2,
    INTERNAL_ERROR:-3
}

exports.initialise = function (url, needsSSL) {
    if (needsSSL == true) {
      url += "?sslmode=require"
    }

    if (thePool) {
      thePool.end();
    };

    theConfig = null;

    theConfig = {
      connectionString: url,
      ssl: needsSSL
    };

    thePool = new Pool(theConfig);
};

exports.test = async function(arg) {
    await stall(500, createError(errors.PARAMETER_ERROR,"bad parameter!"));
}

//#region extra functions

//QUERY used to create the table
/*
CREATE TABLE "public"."scores" (
    "id" UUID DEFAULT uuid_generate_v4(),
    "event" UUID NOT NULL,
    "activity" UUID NOT NULL,
    "subject" UUID NOT NULL,
    "score" NUMERIC(4,2) NOT NULL,
    PRIMARY KEY("id")
);
*/

async function calculateScore(activity, value) {
    return new Promise ((resolve, reject) => {
        request('https://activityevents.restlet.net/v1/activities/' + activity, (err, response, body) => {
            if (err) {
                reject(err);
            }

            var obj = JSON.parse(body);
            var score = ((value - obj.minLegalValue) * 100.0) / (obj.maxLegalValue - obj.minLegalValue);
            resolve(score);
        });
    });
}

async function getEventNameByID(eventID) {
    return new Promise((resolve, reject) => {
        request.get('https://activityevents.restlet.net/v1/events/' + eventID, (err, res, body) => {
            if (err) { reject(err); }

            var obj = JSON.parse(body);
            resolve(obj.name);
        });
    });
}

async function getActivityNameByID(activityID) {
    return new Promise((resolve, reject) => {
        request.get('https://activityevents.restlet.net/v1/activities/' + activityID, (err, res, body) => {
            if (err) { reject(err); }

            var obj = JSON.parse(body);
            resolve(obj.name);
        });
    });
}

async function getSubjectNicknameByID(subjectID) {
    return new Promise((resolve, reject) => {
        request.get('https://activityevents.restlet.net/v1/subjects/' + subjectID, (err, res, body) => {
            if (err) { reject(err); }

            var obj = JSON.parse(body);
            resolve(obj.nickname);
        });
    });
}

//#endregion

//#region CREATE

exports.postScore = async function(id, event, activity, subject, value) {
    var score = await calculateScore(activity, value);

    var result = null;

    var query = 'INSERT INTO scores("id","event","activity","subject","score") VALUES($1, $2 , $3, $4, $5) RETURNING "id", "event", "activity", "subject", "score";';
    
    var parameters = [id,event,activity,subject,score];
    try{
        // the foreign key set-up in the DB ensures we delete all associated events.
        var response = await thePool.query(query,parameters);
        result = response.rows[0];
    }catch(e){
        throw(createError(errors.PARAMETER_ERROR,e.message));
    }

    return result;
}

//#endregion

//#region READ

exports.getScores = async function(id, event, activity, subject, score, $page, $size, $sort){
    return new Promise ( async (resolve, reject) => {
        var result = null;

        var stem = 'select * from scores where';
        var id_comp = '($1::uuid is null or id = $1) and ';
        var event_comp = '($2::uuid is null or event = $2) and ';
        var activity_comp = '($3::uuid is null or activity = $3) and ';
        var subject_comp = '($4::uuid is null or subject = $4) and ';
        var score_comp = '($5::numeric(4,2) is null or score = $5);';

        var page = 0;
        var size = 0;
        var sort = "";

        if ($page) {
            try {
                page = parseInt($page);
            } catch(e){}

        }
        if ($size) {
            try {
                size = parseInt($size);
            } catch(e){}
        }
        if ($sort) {
            sort = ' order by ' + $sort; // expecting something like "score ASC, date DESC". Will throw on error. 
        }

        var pagination_comp = "";
        var offset = page * size;
        if (offset) {
            pagination_comp = " OFFSET " + offset + " LIMIT " + size; 
        }

        var query = 
            stem + 
            id_comp +
            event_comp +
            activity_comp +
            subject_comp +
            score_comp +
            sort + 
            pagination_comp + ";"; 
        
        var parameters = [id, event, activity, subject, score];
        try {
            var response = await thePool.query(query,parameters);
            result = response.rows;
        } catch(e) {
            throw(createError(errors.PARAMETER_ERROR,e.message));
        }


        var promises = [];

        for (var i = 0; i < result.length; i++) { 
            
            promises.push(getEventNameByID(result[i].event));
            promises.push(getActivityNameByID(result[i].activity));
            promises.push(getSubjectNicknameByID(result[i].subject));

        }

        Promise.all(promises)
        .then((values) => {
            for (var i = 0; i < result.length; i++) {
                result[i].event = values[i * 3];
                result[i].activity = values[i * 3 + 1];
                result[i].subject = values[i * 3 + 2];
            }

            resolve(result);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

//#endregion

//#region UPDATE

exports.putScore = async function(id, event, activity, subject, value) {
    var score = await calculateScore(activity, value);

    var result = null;

    var query = 'UPDATE scores SET "event"= $2::uuid, "activity"= $3::uuid, "subject"= $4::uuid, "score"= $5::numeric(4,2) WHERE "id"= $1::uuid RETURNING "id", "event", "activity", "subject", "score";';  
    var parameters = [id,event,activity,subject,score];
    try{
        // the foreign key set-up in the DB ensures we delete all associated events.
        var response = await thePool.query(query,parameters);
        result = response.rows[0];

    }catch(e){
        throw(createError(errors.PARAMETER_ERROR,e.message));
    }
    if(!result){
        throw(createError(errors.PARAMETER_ERROR,"no result: perhaps the id was incorrect."));
    }
    return result;
}

//#endregion

//#region DELETE

exports.deleteScoreByID = async function(idName, id) {
    var result = null;

    var stem = 'delete from scores where ';
    var id_comp = idName + ' = $1';
    
    var query = 
        stem + 
        id_comp + ";"; 
        

    var parameters = [id];
    try{
        var response = await thePool.query(query,parameters);
        result = response.rowCount;
    }catch(e) {
        throw(createError(errors.PARAMETER_ERROR,e.message));
    }

    return result;
}

//#endregion
'use strict';

var { Pool } = require('pg');

var createError = require('../utils/error').createError;
var stall = require('../utils/stall').stall;

var thePool = null;
var theConfig = null;


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

exports.getScores = async function(id, event, activity, subject, score, $page, $size, $sort){
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

    return result;
}
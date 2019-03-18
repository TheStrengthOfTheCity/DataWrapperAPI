'use strict';

var database = require('./database');
var errApi = require('../utils/error');

var request = require('request');

//#region DELETE

/**
 * Deletes a Activity
 *
 * activityid String Identifier of the Activity
 * no response value expected for this operation
 **/
exports.deleteActivitiesActivityid = function(activityid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

/**
 * Deletes a Event
 *
 * eventid String Identifier of the Event
 * no response value expected for this operation
 **/
exports.deleteEventsEventid = function(eventid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a Observation
 *
 * observationid String Identifier of the Observation
 * no response value expected for this operation
 **/
exports.deleteObservationsObservationid = function(observationid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a Subject
 *
 * subjectid String Identifier of the Subject
 * no response value expected for this operation
 **/
exports.deleteSubjectsSubjectid = function(subjectid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

//#endregion

//#region GET

/**
 * Loads a list of Observation
 *
 * activity String Allows to filter the collections of result by the value of field activity (optional)
 * event String Allows to filter the collections of result by the value of field event (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * subject String Allows to filter the collections of result by the value of field subject (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * value String Allows to filter the collections of result by the value of field value (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * timestamp_s_unix_epoch_utc String Allows to filter the collections of result by the value of field timestamp_s_unix_epoch_utc (optional)
 * score Boolean Allows to get scores instead of observations (optional)
 * returns List
 **/
exports.getObservations = function(activity,event,$size,$page,subject,id,value,$sort,timestamp_s_unix_epoch_utc,score) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"event\":\"sample event\",\"activity\":\"sample activity\",\"subject\":\"sample subject\",\"value\":0.0,\"timestamp_s_unix_epoch_utc\":1510568560}", "{\"id\":\"sample id\",\"event\":\"sample event\",\"activity\":\"sample activity\",\"subject\":\"sample subject\",\"value\":0.0,\"timestamp_s_unix_epoch_utc\":1510568560}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

//#endregion

//#region POST

var postObservationToRestlet = async function(requestBody) {
  return new Promise((resolve, reject) => {
    request.post({
      headers: {"content-type": "application/json"},
      url: "https://activityevents.restlet.net/v1/observations",
      body: requestBody,
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log("function(postObservationToRestlet): Error when posting observation: " + error);
      }
  
      resolve(body);
    });
  });
}

/**
 * Adds a Observation
 *
 * body Observation  (optional)
 * returns Observation
 **/
exports.postObservations = function(body) {
  return new Promise(function(resolve, reject) {
    postObservationToRestlet(body)
    .then((result) => {
      var id = result.id;
      var event = result.event;
      var activity = result.activity;
      var subject = result.subject;
      var value = result.value;

      database.postScore(id, event, activity, subject, value)
      .then(resolve)
      .catch(function(e){
        switch(e.statusCode){
          case database.errors.DATABASE_ERROR:
          // remove database specific error - will leak information.
          reject (errApi.create500Error("something terrible happened with the database. Sorry..."));
          break;
          case database.errors.INTERNAL_ERROR:
          reject(errApi.create500Error(e.message));
          break;
          case database.errors.PARAMETER_ERROR:
          reject(errApi.create400Error(e.message));
          break;
        }
      });
    });
  });
}

//#endregion

//#region PUT

/**
 * Stores a Observation
 *
 * observationid String Identifier of the Observation
 * body Observation  (optional)
 * returns Observation
 **/
exports.putObservationsObservationid = function(observationid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"event\":\"sample event\",\"activity\":\"sample activity\",\"subject\":\"sample subject\",\"value\":0.0,\"timestamp_s_unix_epoch_utc\":1510568560}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

//#endregion

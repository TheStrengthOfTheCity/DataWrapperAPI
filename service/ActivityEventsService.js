'use strict';

var database = require('./database');
var errApi = require('../utils/error');

//SWAGGER GENERATED CODE

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

exports.getScores = function (id, event, activity, subject, value, $page, $size, $sort) {
  return new Promise(function(resolve, reject) {
    database.getScores(id, event, activity, subject, value, $page, $size, $sort)
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
    })
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
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"event\":\"sample event\",\"activity\":\"sample activity\",\"subject\":\"sample subject\",\"value\":0.0,\"timestamp_s_unix_epoch_utc\":1510568560}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

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


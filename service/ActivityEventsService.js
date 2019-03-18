'use strict';

var database = require('./database');
var errApi = require('../utils/error');

var request = require('request');

//SWAGGER GENERATED CODE

//#region CREATE

var postObservation = async function (inputBody) {
  return new Promise ((resolve, reject) => {
    var options = {
      uri: 'https://activityevents.restlet.net/v1/observations',
      method: 'POST',
      json: inputBody
    };

    request(options, (error, response, body) => {
      if (error) {console.log("Error when posting observation: " + error);}

      resolve(body);
    });
  });
}

exports.postObservations = function(body) {
  return new Promise(function(resolve, reject) {
    postObservation(body)
    .then((newBody) => {
      var id = newBody.id;
      var event = newBody.event;
      var activity = newBody.activity;
      var subject = newBody.subject;
      var value = newBody.value;

      database.postScores(id, event, activity, subject, value)
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

//#region READ

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
    });
  });
}

//#endregion

//#region UPDATE

exports.putObservationsObservationid = function(observationid,body) {
  return new Promise(function(resolve, reject) {

    var id = observationid;
    var event = body.event;
    var activity = body.activity;
    var subject = body.subject;
    var value = body.value;

    database.putScore(id, event, activity, subject, value)
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
}

//#endregion

//#region DELETE

exports.deleteScoreByObservationID = function(observationID) {
  return new Promise(function(resolve, reject) {
    database.deleteScoreByID('id', observationID)
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
}

exports.deleteScoreByEventID = function(EventID) {
  return new Promise(function(resolve, reject) {
    database.deleteScoreByID('event', EventID)
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
}

exports.deleteScoreByActivityID = function(ActivityID) {
  return new Promise(function(resolve, reject) {
    database.deleteScoreByID('activity', ActivityID)
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
}

exports.deleteScoreBySubjectID = function(SubjectID) {
  return new Promise(function(resolve, reject) {
    database.deleteScoreByID('subject', SubjectID)
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
}

//#endregion
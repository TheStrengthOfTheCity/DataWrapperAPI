'use strict';

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
 * returns List
 **/
exports.getObservations = function(activity,event,$size,$page,subject,id,value,$sort,timestamp_s_unix_epoch_utc) {
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


/**
 * Loads a Observation
 *
 * observationid String Identifier of the Observation
 * returns Observation
 **/
exports.getObservationsObservationid = function(observationid) {
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

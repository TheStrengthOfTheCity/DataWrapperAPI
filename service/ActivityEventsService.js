'use strict';

var https = require('https');

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
 * Deletes a EventActivityMapping
 *
 * eventActivityMappingid String Identifier of the EventActivityMapping
 * no response value expected for this operation
 **/
exports.deleteEventActivityMappingsEventActivityMappingid = function(eventActivityMappingid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a EventSubjectMapping
 *
 * eventSubjectMappingid String Identifier of the EventSubjectMapping
 * no response value expected for this operation
 **/
exports.deleteEventSubjectMappingsEventSubjectMappingid = function(eventSubjectMappingid) {
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


/**
 * Loads a list of Activity
 *
 * units String Allows to filter the collections of result by the value of field units (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * name String Allows to filter the collections of result by the value of field name (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * maxLegalValue String Allows to filter the collections of result by the value of field maxLegalValue (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * minLegalValue String Allows to filter the collections of result by the value of field minLegalValue (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * description String Allows to filter the collections of result by the value of field description (optional)
 * returns List
 **/
exports.getActivities = function(units,$page,name,$sort,maxLegalValue,id,minLegalValue,$size,description) {
  return new Promise(function(resolve, reject) {
    https.get("https://activityevents.restlet.net/v1/activities/", (res) => {
      res.on('data', (chunk) => {
        resolve(JSON.parse(chunk));
      });
    })
  });
}


/**
 * Loads a Activity
 *
 * activityid String Identifier of the Activity
 * returns Activity
 **/
exports.getActivitiesActivityid = function(activityid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"description\":\"sample description\",\"units\":\"J.s^-1\",\"minLegalValue\":1.1,\"maxLegalValue\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a list of EventActivityMapping
 *
 * $size String Size of the page to retrieve. Integer value (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * event String Allows to filter the collections of result by the value of field event (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * activity String Allows to filter the collections of result by the value of field activity (optional)
 * returns List
 **/
exports.getEventActivityMappings = function($size,id,event,$page,$sort,activity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"activity\":\"sample activity\",\"event\":\"sample event\"}", "{\"id\":\"sample id\",\"activity\":\"sample activity\",\"event\":\"sample event\"}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a EventActivityMapping
 *
 * eventActivityMappingid String Identifier of the EventActivityMapping
 * returns EventActivityMapping
 **/
exports.getEventActivityMappingsEventActivityMappingid = function(eventActivityMappingid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"activity\":\"sample activity\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a list of EventSubjectMapping
 *
 * $page String Number of the page to retrieve. Integer value. (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * subject String Allows to filter the collections of result by the value of field subject (optional)
 * event String Allows to filter the collections of result by the value of field event (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * returns List
 **/
exports.getEventSubjectMappings = function($page,id,$size,subject,event,$sort) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"subject\":\"sample subject\",\"event\":\"sample event\"}", "{\"id\":\"sample id\",\"subject\":\"sample subject\",\"event\":\"sample event\"}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a EventSubjectMapping
 *
 * eventSubjectMappingid String Identifier of the EventSubjectMapping
 * returns EventSubjectMapping
 **/
exports.getEventSubjectMappingsEventSubjectMappingid = function(eventSubjectMappingid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"subject\":\"sample subject\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a list of Event
 *
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * date String Allows to filter the collections of result by the value of field date (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * $size String Size of the page to retrieve. Integer value (optional)
 * name String Allows to filter the collections of result by the value of field name (optional)
 * postcode String Allows to filter the collections of result by the value of field postcode (optional)
 * returns List
 **/
exports.getEvents = function($sort,date,id,$page,$size,name,postcode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"name\":\"sample name\",\"date\":\"2017-12-31\",\"postcode\":\"M3 4FP\"}", "{\"id\":\"sample id\",\"name\":\"sample name\",\"date\":\"2017-12-31\",\"postcode\":\"M3 4FP\"}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a Event
 *
 * eventid String Identifier of the Event
 * returns Event
 **/
exports.getEventsEventid = function(eventid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"date\":\"2017-12-31\",\"postcode\":\"M3 4FP\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


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
 * Loads a list of Subject
 *
 * $size String Size of the page to retrieve. Integer value (optional)
 * $page String Number of the page to retrieve. Integer value. (optional)
 * $sort String Order in which to retrieve the results. Multiple sort criteria can be passed. Example: sort=age ASC,height DESC (optional)
 * id String Allows to filter the collections of result by the value of field id (optional)
 * nickname String Allows to filter the collections of result by the value of field nickname (optional)
 * returns List
 **/
exports.getSubjects = function($size,$page,$sort,id,nickname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "{\"id\":\"sample id\",\"nickname\":\"sample nickname\"}", "{\"id\":\"sample id\",\"nickname\":\"sample nickname\"}" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loads a Subject
 *
 * subjectid String Identifier of the Subject
 * returns Subject
 **/
exports.getSubjectsSubjectid = function(subjectid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"nickname\":\"sample nickname\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Activity
 *
 * body Activity  (optional)
 * returns Activity
 **/
exports.postActivities = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"description\":\"sample description\",\"units\":\"J.s^-1\",\"minLegalValue\":1.1,\"maxLegalValue\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a EventActivityMapping
 *
 * body EventActivityMapping  (optional)
 * returns EventActivityMapping
 **/
exports.postEventActivityMappings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"activity\":\"sample activity\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a EventSubjectMapping
 *
 * body EventSubjectMapping  (optional)
 * returns EventSubjectMapping
 **/
exports.postEventSubjectMappings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"subject\":\"sample subject\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds a Event
 *
 * body Event  (optional)
 * returns Event
 **/
exports.postEvents = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"date\":\"2017-12-31\",\"postcode\":\"M3 4FP\"}";
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
 * Adds a Subject
 *
 * body Subject  (optional)
 * returns Subject
 **/
exports.postSubjects = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"nickname\":\"sample nickname\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a Activity
 *
 * activityid String Identifier of the Activity
 * body Activity  (optional)
 * returns Activity
 **/
exports.putActivitiesActivityid = function(activityid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"description\":\"sample description\",\"units\":\"J.s^-1\",\"minLegalValue\":1.1,\"maxLegalValue\":1.1}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a EventActivityMapping
 *
 * eventActivityMappingid String Identifier of the EventActivityMapping
 * body EventActivityMapping  (optional)
 * returns EventActivityMapping
 **/
exports.putEventActivityMappingsEventActivityMappingid = function(eventActivityMappingid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"activity\":\"sample activity\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a EventSubjectMapping
 *
 * eventSubjectMappingid String Identifier of the EventSubjectMapping
 * body EventSubjectMapping  (optional)
 * returns EventSubjectMapping
 **/
exports.putEventSubjectMappingsEventSubjectMappingid = function(eventSubjectMappingid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"subject\":\"sample subject\",\"event\":\"sample event\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Stores a Event
 *
 * eventid String Identifier of the Event
 * body Event  (optional)
 * returns Event
 **/
exports.putEventsEventid = function(eventid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"name\":\"sample name\",\"date\":\"2017-12-31\",\"postcode\":\"M3 4FP\"}";
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


/**
 * Stores a Subject
 *
 * subjectid String Identifier of the Subject
 * body Subject  (optional)
 * returns Subject
 **/
exports.putSubjectsSubjectid = function(subjectid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"id\":\"sample id\",\"nickname\":\"sample nickname\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


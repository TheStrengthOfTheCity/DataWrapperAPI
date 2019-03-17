'use strict';

var utils = require('../utils/writer.js');
var ActivityEvents = require('../service/ActivityEventsService');

//#region CREATE

module.exports.postActivities = function postActivities (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.postEventActivityMappings = function postEventActivityMappings (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.postEventSubjectMappings = function postEventSubjectMappings (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.postEvents = function postEvents (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.postObservations = function postObservations (req, res, next) {
  var body = req.swagger.params['body'].value;

  ActivityEvents.postObservations(body)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.postSubjects = function postSubjects (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

//#endregion

//#region READ

module.exports.getActivities = function getActivities (req, res, next) {
  res.writeHead(301, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getActivitiesActivityid = function getActivitiesActivityid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEventActivityMappings = function getEventActivityMappings (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEventActivityMappingsEventActivityMappingid = function getEventActivityMappingsEventActivityMappingid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEventSubjectMappings = function getEventSubjectMappings (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEventSubjectMappingsEventSubjectMappingid = function getEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEvents = function getEvents (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getEventsEventid = function getEventsEventid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getObservations = function getObservations (req, res, next) {
  
  var id = req.swagger.params['id'].value || null;
  var event = req.swagger.params['event'].value || null;
  var activity = req.swagger.params['activity'].value || null;
  var subject = req.swagger.params['subject'].value || null;
  var value = req.swagger.params['value'].value || null;
  var $page = req.swagger.params['$page'].value || null;
  var $size = req.swagger.params['$size'].value || null;
  var $sort = req.swagger.params['$sort'].value || null;

  var scores = req.swagger.params['scores'].value || null;
  if (scores != null)
  {
    if (scores == true)
    {
      ActivityEvents.getScores(id, event, activity, subject, value, $page, $size, $sort)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
      return;
    }
  }

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getObservationsObservationid = function getObservationsObservationid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getSubjects = function getSubjects (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.getSubjectsSubjectid = function getSubjectsSubjectid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

//#endregion

//#region UPDATE

module.exports.putActivitiesActivityid = function putActivitiesActivityid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.putEventActivityMappingsEventActivityMappingid = function putEventActivityMappingsEventActivityMappingid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.putEventSubjectMappingsEventSubjectMappingid = function putEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.putEventsEventid = function putEventsEventid (req, res, next) {
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
  res.end();
};

module.exports.putObservationsObservationid = function putObservationsObservationid (req, res, next) {
  
  var observationid = req.swagger.params['observationid'].value;
  var body = req.swagger.params['body'].value;

  ActivityEvents.putObservationsObservationid(observationid,body)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.putSubjectsSubjectid = function putSubjectsSubjectid (req, res, next) {
   res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
   res.end();
};

//#endregion

//#region DELETE

module.exports.deleteActivitiesActivityid = function deleteActivitiesActivityid (req, res, next) {
  
  var activityid = req.swagger.params['activityid'].value;

  ActivityEvents.deleteScoreByActivityID(activityid)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.deleteEventActivityMappingsEventActivityMappingid = function deleteEventActivityMappingsEventActivityMappingid (req, res, next) {
   res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
   res.end();
};

module.exports.deleteEventSubjectMappingsEventSubjectMappingid = function deleteEventSubjectMappingsEventSubjectMappingid (req, res, next) {
   res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
   res.end();
};

module.exports.deleteEventsEventid = function deleteEventsEventid (req, res, next) {
  
  var eventid = req.swagger.params['eventid'].value;

  ActivityEvents.deleteScoreByEventID(eventid)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.deleteObservationsObservationid = function deleteObservationsObservationid (req, res, next) {

  var observationid = req.swagger.params['observationid'].value;

  ActivityEvents.deleteScoreByObservationID(observationid)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

module.exports.deleteSubjectsSubjectid = function deleteSubjectsSubjectid (req, res, next) {
  
  var subjectid = req.swagger.params['subjectid'].value;

  ActivityEvents.deleteScoreBySubjectID(subjectid)
  .then(function (response) {
    res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url, 'Access-Control-Allow-Origin': '*'});
    res.end();
  })
  .catch(function (response) {
    utils.writeJson(res, response);
  });
};

//#endregion

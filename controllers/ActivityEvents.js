'use strict';

var utils = require('../utils/writer.js');
var ActivityEvents = require('../service/ActivityEventsService');

module.exports.deleteActivitiesActivityid = function deleteActivitiesActivityid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.deleteEventActivityMappingsEventActivityMappingid = function deleteEventActivityMappingsEventActivityMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.deleteEventSubjectMappingsEventSubjectMappingid = function deleteEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.deleteEventsEventid = function deleteEventsEventid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.deleteObservationsObservationid = function deleteObservationsObservationid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.deleteSubjectsSubjectid = function deleteSubjectsSubjectid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getActivities = function getActivities (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getActivitiesActivityid = function getActivitiesActivityid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEventActivityMappings = function getEventActivityMappings (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEventActivityMappingsEventActivityMappingid = function getEventActivityMappingsEventActivityMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEventSubjectMappings = function getEventSubjectMappings (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEventSubjectMappingsEventSubjectMappingid = function getEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEvents = function getEvents (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getEventsEventid = function getEventsEventid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getObservations = function getObservations (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
  
  /*
  var activity = req.swagger.params['activity'].value;
  var event = req.swagger.params['event'].value;
  var $size = req.swagger.params['$size'].value;
  var $page = req.swagger.params['$page'].value;
  var subject = req.swagger.params['subject'].value;
  var id = req.swagger.params['id'].value;
  var value = req.swagger.params['value'].value;
  var $sort = req.swagger.params['$sort'].value;
  var timestamp_s_unix_epoch_utc = req.swagger.params['timestamp_s_unix_epoch_utc'].value;
  ActivityEvents.getObservations(activity,event,$size,$page,subject,id,value,$sort,timestamp_s_unix_epoch_utc)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
	*/
};

module.exports.getObservationsObservationid = function getObservationsObservationid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
  
  /*
  var observationid = req.swagger.params['observationid'].value;
  ActivityEvents.getObservationsObservationid(observationid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
	*/
};

module.exports.getSubjects = function getSubjects (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.getSubjectsSubjectid = function getSubjectsSubjectid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postActivities = function postActivities (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postEventActivityMappings = function postEventActivityMappings (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postEventSubjectMappings = function postEventSubjectMappings (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postEvents = function postEvents (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postObservations = function postObservations (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.postSubjects = function postSubjects (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putActivitiesActivityid = function putActivitiesActivityid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putEventActivityMappingsEventActivityMappingid = function putEventActivityMappingsEventActivityMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putEventSubjectMappingsEventSubjectMappingid = function putEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putEventsEventid = function putEventsEventid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putObservationsObservationid = function putObservationsObservationid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

module.exports.putSubjectsSubjectid = function putSubjectsSubjectid (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  res.writeHead(307, {'Location': 'https://activityevents.restlet.net' + req.url});
  res.end();
};

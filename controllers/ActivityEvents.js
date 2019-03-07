'use strict';

var utils = require('../utils/writer.js');
var ActivityEvents = require('../service/ActivityEventsService');

module.exports.deleteActivitiesActivityid = function deleteActivitiesActivityid (req, res, next) {
  var activityid = req.swagger.params['activityid'].value;
  ActivityEvents.deleteActivitiesActivityid(activityid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEventActivityMappingsEventActivityMappingid = function deleteEventActivityMappingsEventActivityMappingid (req, res, next) {
  var eventActivityMappingid = req.swagger.params['eventActivityMappingid'].value;
  ActivityEvents.deleteEventActivityMappingsEventActivityMappingid(eventActivityMappingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEventSubjectMappingsEventSubjectMappingid = function deleteEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  var eventSubjectMappingid = req.swagger.params['eventSubjectMappingid'].value;
  ActivityEvents.deleteEventSubjectMappingsEventSubjectMappingid(eventSubjectMappingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEventsEventid = function deleteEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  ActivityEvents.deleteEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteObservationsObservationid = function deleteObservationsObservationid (req, res, next) {
  var observationid = req.swagger.params['observationid'].value;
  ActivityEvents.deleteObservationsObservationid(observationid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSubjectsSubjectid = function deleteSubjectsSubjectid (req, res, next) {
  var subjectid = req.swagger.params['subjectid'].value;
  ActivityEvents.deleteSubjectsSubjectid(subjectid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivities = function getActivities (req, res, next) {
  var units = req.swagger.params['units'].value;
  var $page = req.swagger.params['$page'].value;
  var name = req.swagger.params['name'].value;
  var $sort = req.swagger.params['$sort'].value;
  var maxLegalValue = req.swagger.params['maxLegalValue'].value;
  var id = req.swagger.params['id'].value;
  var minLegalValue = req.swagger.params['minLegalValue'].value;
  var $size = req.swagger.params['$size'].value;
  var description = req.swagger.params['description'].value;
  ActivityEvents.getActivities(units,$page,name,$sort,maxLegalValue,id,minLegalValue,$size,description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivitiesActivityid = function getActivitiesActivityid (req, res, next) {
  var activityid = req.swagger.params['activityid'].value;
  ActivityEvents.getActivitiesActivityid(activityid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventActivityMappings = function getEventActivityMappings (req, res, next) {
  var $size = req.swagger.params['$size'].value;
  var id = req.swagger.params['id'].value;
  var event = req.swagger.params['event'].value;
  var $page = req.swagger.params['$page'].value;
  var $sort = req.swagger.params['$sort'].value;
  var activity = req.swagger.params['activity'].value;
  ActivityEvents.getEventActivityMappings($size,id,event,$page,$sort,activity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventActivityMappingsEventActivityMappingid = function getEventActivityMappingsEventActivityMappingid (req, res, next) {
  var eventActivityMappingid = req.swagger.params['eventActivityMappingid'].value;
  ActivityEvents.getEventActivityMappingsEventActivityMappingid(eventActivityMappingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventSubjectMappings = function getEventSubjectMappings (req, res, next) {
  var $page = req.swagger.params['$page'].value;
  var id = req.swagger.params['id'].value;
  var $size = req.swagger.params['$size'].value;
  var subject = req.swagger.params['subject'].value;
  var event = req.swagger.params['event'].value;
  var $sort = req.swagger.params['$sort'].value;
  ActivityEvents.getEventSubjectMappings($page,id,$size,subject,event,$sort)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventSubjectMappingsEventSubjectMappingid = function getEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  var eventSubjectMappingid = req.swagger.params['eventSubjectMappingid'].value;
  ActivityEvents.getEventSubjectMappingsEventSubjectMappingid(eventSubjectMappingid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvents = function getEvents (req, res, next) {
  var $sort = req.swagger.params['$sort'].value;
  var date = req.swagger.params['date'].value;
  var id = req.swagger.params['id'].value;
  var $page = req.swagger.params['$page'].value;
  var $size = req.swagger.params['$size'].value;
  var name = req.swagger.params['name'].value;
  var postcode = req.swagger.params['postcode'].value;
  ActivityEvents.getEvents($sort,date,id,$page,$size,name,postcode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsEventid = function getEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  ActivityEvents.getEventsEventid(eventid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getObservations = function getObservations (req, res, next) {
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
};

module.exports.getObservationsObservationid = function getObservationsObservationid (req, res, next) {
  var observationid = req.swagger.params['observationid'].value;
  ActivityEvents.getObservationsObservationid(observationid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubjects = function getSubjects (req, res, next) {
  var $size = req.swagger.params['$size'].value;
  var $page = req.swagger.params['$page'].value;
  var $sort = req.swagger.params['$sort'].value;
  var id = req.swagger.params['id'].value;
  var nickname = req.swagger.params['nickname'].value;
  ActivityEvents.getSubjects($size,$page,$sort,id,nickname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSubjectsSubjectid = function getSubjectsSubjectid (req, res, next) {
  var subjectid = req.swagger.params['subjectid'].value;
  ActivityEvents.getSubjectsSubjectid(subjectid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postActivities = function postActivities (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postActivities(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEventActivityMappings = function postEventActivityMappings (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postEventActivityMappings(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEventSubjectMappings = function postEventSubjectMappings (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postEventSubjectMappings(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEvents = function postEvents (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postEvents(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postObservations = function postObservations (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postObservations(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSubjects = function postSubjects (req, res, next) {
  var body = req.swagger.params['body'].value;
  ActivityEvents.postSubjects(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putActivitiesActivityid = function putActivitiesActivityid (req, res, next) {
  var activityid = req.swagger.params['activityid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putActivitiesActivityid(activityid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEventActivityMappingsEventActivityMappingid = function putEventActivityMappingsEventActivityMappingid (req, res, next) {
  var eventActivityMappingid = req.swagger.params['eventActivityMappingid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putEventActivityMappingsEventActivityMappingid(eventActivityMappingid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEventSubjectMappingsEventSubjectMappingid = function putEventSubjectMappingsEventSubjectMappingid (req, res, next) {
  var eventSubjectMappingid = req.swagger.params['eventSubjectMappingid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putEventSubjectMappingsEventSubjectMappingid(eventSubjectMappingid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEventsEventid = function putEventsEventid (req, res, next) {
  var eventid = req.swagger.params['eventid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putEventsEventid(eventid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putObservationsObservationid = function putObservationsObservationid (req, res, next) {
  var observationid = req.swagger.params['observationid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putObservationsObservationid(observationid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSubjectsSubjectid = function putSubjectsSubjectid (req, res, next) {
  var subjectid = req.swagger.params['subjectid'].value;
  var body = req.swagger.params['body'].value;
  ActivityEvents.putSubjectsSubjectid(subjectid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// This will contain our stored models. The server will break if you
// try to redeclare a model.
var storedModels = {};

/////////////////////////////
// Display Log
/////////////////////////////
exports.display_log = function(req, res, next) {
  var mongoHost = 'apollo:interactive@ds129143.mlab.com:29143/apollo_demo';
  var promise = mongoose.connect(
    'mongodb://' + mongoHost,
    { useMongoClient: true}
  );

  promise.then(function(db) {
    // Use the stored schema if possible, otherwise create it
    if(storedModels['access_log']) {
      var access = storedModels['access_log'];
    } else {
     // Usually this is stored in a different folder, but for now put it here
     var access = storedModels['access_log'] = db.model('access_log', { date: String });
    }

    var newAccess = new access;
    newAccess.date = new Date();

    newAccess.save(function(err) {
      if(err) {
        res.send("Error saving into database");
      } else {
        access.find(function(err, log) {
          res.render('mongo-db', {title: "MongoDB Log Page", log: log.reverse(), host: mongoHost});
        })
      }
    })

  })
}


/////////////////////////////
// Provide Endpoint
/////////////////////////////
exports.provide_endpoint = function(req, res, next) {
  var mongoHost = 'apollo:interactive@ds129143.mlab.com:29143/apollo_demo';
  var promise = mongoose.connect(
    'mongodb://' + mongoHost,
    { useMongoClient: true}
  );

  promise.then(function(db) {

    // Use the stored schema if possible, otherwise create it
    if(storedModels['access_log']) {
      var access = storedModels['access_log'];
    } else {
     // Usually this is stored in a different folder, but for now put it here
     var access = storedModels['access_log'] = db.model('access_log', { date: String });
    }

    var newAccess = new access;
    newAccess.date = new Date();

    newAccess.save(function(err) {
      if(err) {
        res.send("Error saving into database");
      } else {
        access.find(function(err, log) {
          res.send(JSON.stringify(log.reverse()));
        })
      }
    })

  })
}

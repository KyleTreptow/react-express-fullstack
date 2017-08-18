var db_connect = require('../db/connect');

// mongoose
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// This will contain our stored models. The server will break if you
// try to redeclare a model.
var storedModels = {};

var dbUserName = 'kyletreptow';
var dbUserPass = 'Spitfire7&';
var dbUserDB = 'ds149373.mlab.com:49373/treptow-express';
var mongoHost = dbUserName+':'+dbUserPass+'@'+dbUserDB;


/////////////////////////////
// Blog POST
/////////////////////////////
exports.blog_post_endpoint = function(req, res, next) {

  var promise = mongoose.connect(
    'mongodb://' + mongoHost,
    { useMongoClient: true}
  );

  promise.then(function(db) {

    // Use the stored schema if possible, otherwise create it
    if(storedModels['blogposts']) {
      var blogpost = storedModels['blogposts'];
    } else {
     // Usually this is stored in a different folder, but for now put it here
     var blogpost = storedModels['blogposts'] = db.model('blogposts', { date: String, title: String, content: String });
    }

    var newBlogPost = new blogpost;

    newBlogPost.date = new Date();
    newBlogPost.title = req.body.title;
    newBlogPost.content = req.body.content;

    newBlogPost.save(function(err) {
      if(err) {
        res.send("Error saving into database");
      } else {
        res.send(JSON.stringify('Success'));
      }
    })

  })
}


/////////////////////////////
// Blog GET
/////////////////////////////
exports.blog_get_endpoint = function(req, res, next) {
  var promise = mongoose.connect(
    'mongodb://' + mongoHost,
    { useMongoClient: true}
  );

  promise.then(function(db) {

    // Use the stored schema if possible, otherwise create it
    if(storedModels['blogposts']) {
      var blogpost = storedModels['blogposts'];
    } else {
     // Usually this is stored in a different folder, but for now put it here
     var blogpost = storedModels['blogposts'] = db.model('blogposts', { date: String, title: String, content: String });
    }

    blogpost.find(function(err, log) {
      res.send(JSON.stringify(log.reverse()));
    })

  })
}

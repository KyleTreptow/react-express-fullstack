var express = require('express');
var router = express.Router();

var access_log_controller = require('../controllers/access-log');
var blog_controller = require('../controllers/blog-controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET mongo-db page. */
// router.get('/mongo-db', access_log_controller.display_log);

/* GET API Endpoint */
router.get('/accesslog', access_log_controller.provide_endpoint);
router.get('/blog', blog_controller.blog_get_endpoint);
router.post('/blog', blog_controller.blog_post_endpoint);

module.exports = router;

var express = require('express');
var router = express.Router();

var access_log_controller = require('../controllers/access-log');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

/* GET mongo-db page. */
// router.get('/mongo-db', access_log_controller.display_log);

/* GET API Endpoint */
router.get('/api', access_log_controller.provide_endpoint);

module.exports = router;

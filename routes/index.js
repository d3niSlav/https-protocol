var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home | HTTPS Protocol' });
});

/* GET HTTP Page */
router.get('/http', function (req, res, next) {
  res.render('http', { title: 'HTTP | HTTPS Protocol' });
});

/* GET HTTPS Page */
router.get('/https', function (req, res, next) {
  res.render('https', { title: 'HTTPS | HTTPS Protocol' });
});

/* GET SSH Page */
router.get('/ssl', function (req, res, next) {
  res.render('ssl', { title: 'SSH | HTTPS Protocol' });
});

/* GET TLS Page */
router.get('/tls', function (req, res, next) {
  res.render('tls', { title: 'TLS | HTTPS Protocol' });
});

/* GET Resources Page */
router.get('/resources', function (req, res, next) {
  res.render('resources', { title: 'Resources | HTTPS Protocol' });
});

module.exports = router;

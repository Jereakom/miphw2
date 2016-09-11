var express = require('express');
var router = express();

var port = process.env.PORT || 8080;

router.get('/student', function (req, res) {
  res.send('Student route');
});

router.get('/course', function (req, res) {
  res.send('Course route');
});

router.get('/grades', function (req, res) {
  res.send('Grades route');
});

router.get('/', function (req, res) {
  res.send('Default view');
});

router.listen(port);

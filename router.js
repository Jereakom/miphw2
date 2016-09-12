var express = require('express');
var router = express();

var port = process.env.PORT || 80;

// read == get
// write == post
// update == put
// delete == delete

// Student routes

router.get('/student', function (req, res) {
  res.send('Student route');
});

router.post('/student/:id/:name/:address/:class', function (req, res) {
  res.send(req.params);
});

router.put('/student/:id/:name/:address/:class', function (req, res) {
  res.send(req.params);
});

router.delete('/student/:id', function (req, res) {
  res.send(req.params);
});

// Course routes

router.get('/course', function (req, res) {
  res.send('Course route');
});

router.post('/course/:id/:description/:id', function (req, res) {
  res.send(req.params);
});

router.put('/course/:id/:description/:id', function (req, res) {
  res.send(req.params);
});

router.delete('/course/:id', function (req, res) {
  res.send(req.params);
});

// Grade routes

router.get('/grades/:studentID/:courseID/:grade', function (req, res) {
  res.send(req.params);;
});

router.post('/grades/:studentID/:courseID/:grade', function (req, res) {
  res.send(req.params);
});

router.put('/grades/:studentID/:courseID/:grade', function (req, res) {
  res.send(req.params);
});

router.delete('/grades/:studentID/:courseID/', function (req, res) {
  res.send(req.params);
});

// Default route

router.get('/', function (req, res) {
  res.send('Default view');
});

// Redirect to default route

router.get('*',function (req, res) {
        res.redirect('/');
    });

router.listen(port);

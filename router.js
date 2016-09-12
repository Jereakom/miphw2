var express = require('express');
var cookieParser = require('cookie-parser');
var router = express();
router.use(cookieParser());

var port = process.env.PORT || 80;

/*
read == get
write == post
update == put
delete == delete
*/

// Student routes

router.get('/student', function (req, res) {
  res.send('Student route');
});

router.get('/student/:id', function (req, res) {
  var asd = req.params.id;
  uri = req.cookies[asd];
  res.send(uri);
});

router.post('/student/:id/:name/:address/:Class', function (req, res) {
  var studentdata = JSON.stringify(
    {
        "id": req.params.id,
        "name": req.params.name,
        "address": req.params.address,
        "Class": req.params.Class
    }
  );
  res.cookie(req.params.id, studentdata).send('Student saved with the id of ' + req.params.id);
});

router.put('/student/:id/:name/:address/:class', function (req, res) {
  res.send(req.params);
});

router.delete('/student/:id', function (req, res) {
  var check = req.cookies[req.params.id];
  if (check === undefined)
  {
    res.send("No student found");
    return;
  }
  res.clearCookie(req.params.id);
  res.send("The student with the id of "+ req.params.id +" has been removed!");
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

router.all('*',function (req, res) {
        res.redirect('/');
    });

router.listen(port);

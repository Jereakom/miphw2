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

// get

router.get('/student/:id', function (req, res) {
  var check = req.cookies[req.params.id];

  if (check === undefined)
  {
    res.send("No student found");
    return;
  }

  uri = req.cookies[req.params.if];
  res.send(uri);
});

// post

router.post('/student/:id/:name/:address/:Class', function (req, res) {
  var check = req.cookies[req.params.id] ;

  if (check)
  {
    res.send("Trying to update a student's info, please use a put request instead");
    return;
  }

  var studentData = JSON.stringify(
    {
        "id": req.params.id,
        "name": req.params.name,
        "address": req.params.address,
        "Class": req.params.Class
    }
  );
  res.cookie(req.params.id, studentData, { path: '/student'}).send('Student saved with the id of ' + req.params.id);
});

// put

router.put('/student/:id/:name/:address/:Class', function (req, res) {
  var check = req.cookies[req.params.id];

  if (!check)
  {
    res.send("Trying to create a new student, please use a post request instead");
    return;
  }

  var updateData = JSON.stringify(
    {
        "id": req.params.id,
        "name": req.params.name,
        "address": req.params.address,
        "Class": req.params.Class
    }
  );
  res.cookie(req.params.id, updateData, { path: '/student'}).send('Data of student with the id of ' + req.params.id + ' updated!');
});

// delete

router.delete('/student/:id', function (req, res) {
  var check = req.cookies[req.params.id];
  if (check === undefined)
  {
    res.send("No student found");
    return;
  }
  res.clearCookie(req.params.id, {path:'/student'});
  res.send("The student with the id of "+ req.params.id +" has been removed!");
});

// Course routes

// get

router.get('/course/:id', function (req, res) {
  var check = req.cookies[req.params.id];

  if (check === undefined)
  {
    res.send("No course found");
    return;
  }

  uri = req.cookies[req.params.id];
  res.send(uri);
});

// post

router.post('/course/:id/:description/:name', function (req, res) {
  var check = req.cookies[req.params.id] ;

  if (check)
  {
    res.send("Trying to update course info, please use a put request instead");
    return;
  }

  var courseData = JSON.stringify(
    {
        "id": req.params.id,
        "description": req.params.address,
        "name": req.params.name
    }
  );
  res.cookie(req.params.id, courseData, { path: '/course'}).send('Course saved with the id of ' + req.params.id);
});

// put

router.put('/course/:id/:description/:name', function (req, res) {
  var check = req.cookies[req.params.id];

  if (!check)
  {
    res.send("Trying to create a course, please use a post request instead");
    return;
  }

  var updateData = JSON.stringify(
    {
        "id": req.params.id,
        "description": req.params.description,
        "name": req.params.name
    }
  );
  res.cookie(req.params.id, updateData, { path: '/course'}).send('Data of course with the id of ' + req.params.id + ' updated!');
});

// delete

router.delete('/course/:id', function (req, res) {
  var check = req.cookies[req.params.id];
  if (check === undefined)
  {
    res.send("No course found");
    return;
  }
  res.clearCookie(req.params.id, {path:'/course'});
  res.send("The course with the id of "+ req.params.id +" has been removed!");
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

var express = require('express');
var tutorial = express();
tutorial.get('/', function (req, res) {
  res.send('Hello Worlds!');
});

tutorial.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello jenkins success');
});
 
app.listen(process.env.PORT || 5001);
 
module.exports = app;
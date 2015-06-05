var express = require('express');
var http = require ('http');
var util = require('util');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 3000));

var messageArray = ["Hello"];

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function(req, res, next) {
    res.json(messageArray);
});

app.post('/', function(req, res, next) {
    var message=req.body.message;
    res.json(util.inspect(req.body) + " " +  util.inspect(req.headers) + " " +  req.ip + " " +  util.inspect(req.params));
    messageArray.push(new Message("user", message, new Date(), req.ip));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running on port:" + app.get('port'))
})

function Message (username, message, timestamp, ip) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
    this.ip = ip;
}

var express = require('express');
var http = require ('http');
var util = require('util');
var app = express();

var messageArray = [];

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Credentials', '*');
    res.json(messageArray);
});

app.post('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Credentials', '*');
    res.json(util.inspect(req.body) + " " +  util.inspect(req.headers) + " " +  req.ip + " " +  util.inspect(req.params));
    messageArray.push(new Message("user", req.body, new Date(), req.ip));
});

var server = http.createServer(app);
server.listen(3000, '172.16.63.255');


function Message (username, message, timestamp, ip) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
    this.ip = ip;
}

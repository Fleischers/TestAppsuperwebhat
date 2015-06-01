var assert = require('assert');
var http = require('http');
var util = require('util');
var querystring = require('querystring');

// var events = require("events");
var messageArray = [];
var server = http.createServer();
server.on('request', function (req,res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    switch (req.url) {
        // case '/':
        default:
            console.log(new Date());
            console.log('Connected! ' + req.method + "\n"
            // + util.inspect(req.headers)
            );
            var message = new Message( "no user", req.url.slice(1,req.url.length), new Date(), "no ip");
            messageArray.push(message);
            res.end(JSON.stringify(messageArray));
            break;
            /*
            var message = new Message( "user1", req.url.slice(1,req.url.length), new Date());
            messageArray.push(message);


            */
    }




    req.on('data', function(data) {
        console.log("Buffer: " + util.inspect(data));
    });
});
server.on('data', function (data) {
    console.log('data received: ' + data);
});
// server.listen(3000, '172.16.0.200');
//server.listen(3000, '172.16.63.255');
server.listen(3000, '0.0.0.0');

function Message (username, message, timestamp, ip) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
    this.ip = ip;
}


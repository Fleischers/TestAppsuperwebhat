var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var http = require('http');
var util = require('util');
// var querystring = require('querystring');
var express = require ('express');

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
            var message = new Message( "user1", req.url.slice(1,req.url.length), new Date());
            messageArray.push(message);
            res.end(JSON.stringify(messageArray));
            break;
            /*
            var message = new Message( "user1", req.url.slice(1,req.url.length), new Date());
            messageArray.push(message);


            */
        // case '/chat':
        //     if (req.method == 'POST') {
        //         console.log("[200] " + req.method + " to " + req.url);
        //         var fullBody = '';
        //
        //         req.on('data', function(chunk) {
        //             // append the current chunk of data to the fullBody variable
        //             fullBody += chunk.toString();
        //         });
        //
        //         req.on('end', function() {
        //
        //             // request ended -> do something with the data
        //             res.writeHead(200, "OK", {'Content-Type': 'application/json'});
        //
        //             // parse the received body data
        //             var decodedBody = querystring.parse(fullBody);
        //
        //             // output the decoded data to the HTTP response
        //             res.write(util.inspect(decodedBody));
        //             res.end();
        //         });
        //
        //     } else {
        //         console.log("[405] " + req.method + " to " + req.url);
        //         res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
        //         res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
        //     }
        //     break;
        // default:
        //     res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
        //     res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
        //     console.log("[404] " + req.method + " to " + req.url);
    }




    req.on('data', function(data) {
        // buffer.write(data);
        // console.log("Buffer: " + buffer);
        console.log("Buffer: " + util.inspect(data));
    });
});
server.on('data', function (data) {
    console.log('data received: ' + data);
});
// server.listen(3000, '172.16.0.200');
server.listen(3000, '172.16.63.255');

function Message (username, message, timestamp) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
}
// 172.16.63.255
//}).listen(3000, 'localhost');


var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Mongo connected correctly to server.");
  db.close();
});

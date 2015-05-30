var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var http = require('http');
var events = require("events");
var messagepool = "";
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.url != "/favicon.ico")
  messagepool += req.url.slice(1,req.url.length) + "\n";
  res.end(messagepool);
  // res.end(JSON.stringify(req.url));

//}).listen(3000, '192.168.1.200');
}).listen(3000, '172.16.0.200');
//}).listen(3000, 'localhost');
server.on('connection', function (stream) {
  console.log('someone connected!');
});
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Mongo connected correctly to server.");
  db.close();
});

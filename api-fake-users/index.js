var http = require('http');
const express = require('express');
const users = require('./data/users');

const app = express();

app.get('/users', function(req, res, next) {
  res.json(users);
});

var server = http.createServer(app);
server.listen(3001);

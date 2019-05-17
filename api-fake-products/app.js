var express = require('express');
var indexRouter = require('./routes/index');

var app = express();

app.use('/', indexRouter);

module.exports = app;

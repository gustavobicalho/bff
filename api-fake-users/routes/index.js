var express = require('express');
var users = require('../data/users');

var router = express.Router();

router.get('/users', function(req, res, next) {
  res.json(users);
});

module.exports = router;

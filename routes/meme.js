var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');

router.get('/', function (req, res, next) {
    if(!req.user) {
      res.render('memedetails', { user: null });
  }
  else {
    res.render('memedetails', {user: req.user});
  }
});

module.exports = router;

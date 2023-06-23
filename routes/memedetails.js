var express = require('express');
var router = express.Router();
const axios = require('axios');
var bodyParser = require('body-parser');
var session = require('express-session');


router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// GET request route
router.get('/', function (req, res, next) { 
  const memeTransfer = req.session.memeTransfer;
  const user = req.user;  
  res.render('memedetails', { memeTransfer: memeTransfer, user: user});
})

// POST request route
router.post('/', function (req, res, next) {
  const memeTransfer = req.body;
  console.log(memeTransfer); 
  req.session.memeTransfer = memeTransfer;
  res.sendStatus(200);
});

module.exports = router;

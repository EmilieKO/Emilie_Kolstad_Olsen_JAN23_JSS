var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
var session = require('express-session');

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

let memeResponse = []

function fetchMemeData() {
  let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/api.json'))
  let url = JSON.parse(rawdata);
  axios
    .get(url)
    .then(response => {
      console.log("api called")
      memeResponse = response.data.data.memes;
    })
}

fetchMemeData()

  router.get('/', function (req, res, next) {
      const memeData = memeResponse.map(meme => {
          return {
          name: meme.name,
          url: meme.url,
          id: meme.id,
          width: meme.width,
          height: meme.height,
          };
          
      });
          if (!req.user) {
        res.render('memes', {memeData: memeData, user: null, storedClass: req.session.selectedClass });
    }
    else {
      res.render('memes', {memeData: memeData, user: req.user, storedClass: req.session.selectedClass});
    }
      })
;

module.exports = router;
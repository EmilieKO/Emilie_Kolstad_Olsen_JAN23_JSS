var express = require('express');
var router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

router.get('/', function (req, res, next) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/api.json'))
    let url = JSON.parse(rawdata);
    axios
    .get(url)
    .then(response =>  {
    const memes = response.data.data.memes;
    const memeData = memes.map(meme => {
        return {
        name: meme.name,
        url: meme.url,
        id: meme.id,
        width: meme.width,
        height: meme.height,
        };
        
    });
        if (!req.user) {
      res.render('memes', {memeData: memeData, user: null });

  }
  else {
    res.render('memes', {memeData: memeData, user: req.user});
  }
    })
});

module.exports = router;
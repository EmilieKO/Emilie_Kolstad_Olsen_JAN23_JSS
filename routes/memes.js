var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

router.get('/', function (req, res, next) {
    let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/api.json'))
    let url = JSON.parse(rawdata);
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const memes = data.data.memes;
    const memeData = memes.map(meme => {
        return {
        name: meme.name,
        url: meme.url
        };
    });
    res.render('memes', { memeData });
    })
});

module.exports = router;
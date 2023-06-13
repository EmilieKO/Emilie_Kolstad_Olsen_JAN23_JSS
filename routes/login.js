var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local') 

passport.use(new LocalStrategy(function verify(username, password, cb) {
    let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json")));
    let filteredArray = usersArray.filter(x => x.username = username);
    if (filteredArray.length > 0) {
        let usersData = filteredArray[0];
        if (usersData.password == password) {
            return cb(null, usersData);
        }
    }
    else {
        return cb(null, false);
    }
}));
router.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login'
}))

router.get('/', function (req, res, next) {
    res.render('login')
});

module.exports = router;

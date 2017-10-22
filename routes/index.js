var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('this is a in root')
});

module.exports = router;

'use strict';
var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
    res.render('index');
});

module.exports = router;
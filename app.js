'use strict'

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/product');
var swagger = require('./routes/swagger');
require('dotenv').config();

var app = express();

app.use(logger(process.env.NODE_LOG_ENV));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', index);
app.use('/products', users);
app.use('/', swagger);


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

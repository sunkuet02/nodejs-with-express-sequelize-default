'use strict'

var express = require('express');
var path = require('path');
var logger = require('morgan');

require('dotenv').config()

var index = require('./routes/index');
var users = require('./routes/users');
var swagger = require('./routes/swagger')

var app = express();

app.use(logger(process.env.NODE_ENV));

app.use('/', index);
app.use('/users', users);
app.use('/', swagger);


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'dev' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// use body parser to get body from request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// serve static files from public directory
app.use(express.static('public'));

// initialize comments
var comments = []
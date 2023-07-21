// create web server
// 1. import http module
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const template = require('./lib/template.js');

// 2. create web server object
const app = http.createServer(function(request,response){
    // 2.1. get url
    const _url = request.url;
    // 2.2. parse url
    const queryData = url.parse(_url, true).query;
    const pathname = url.parse(_url, true).pathname;
    // 2.3. if pathname is root
    if(pathname === '/'){
        // 2.3.1. if queryData.id is undefined
        if(queryData.id === undefined){
            //
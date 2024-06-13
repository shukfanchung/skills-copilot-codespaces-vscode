// create web server
// 1. load http module
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');

// 2. create server
http.createServer(function (req, res) {
    // 3. parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    if (pathname == "/") {
        pathname = "/index.html";
    }
})
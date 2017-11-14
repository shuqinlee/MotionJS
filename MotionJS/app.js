var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
//
app.use(express.static(__dirname));
app.use('/', function (req, res) {
    var out = fs.createWriteStream('public/files.txt');
    var files = fs.readdirSync('./public/img');

    files.forEach(function (itm, ind) {
        if (itm[0] != '.') {
            // console.log(itm);
            out.write(itm + '\n');
        }
    });
    res.sendFile(__dirname + '/index.html');
});
//
var server = app.listen(2500, function (req, res) {
    console.log('Server starts at port 127.0.0.1:2500 ...');
});

module.exports = app;
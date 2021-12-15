var express = require('express');
var path = require('path');

var app = express();

// static files
app.use(express.static('public'));

// route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// on port listening
app.listen(80);

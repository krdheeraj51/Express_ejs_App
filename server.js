// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, '/'));
// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/'));

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// contact page

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(3000);
console.log('3000 is the magic port');
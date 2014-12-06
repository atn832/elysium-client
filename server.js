var express = require('express');
var app = express();
var compression = require('compression');

//var oneDay = 86400000;

app.use(compression());
app.use(express.static(__dirname + '/build'));
//app.use(express.static(__dirname + '/build', { maxAge: oneDay }));

app.listen(process.env.PORT || 3000);

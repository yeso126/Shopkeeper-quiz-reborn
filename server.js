var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var morgan = require('morgan');
var port = process.env.PORT || 3000;

var app = express();

// Routes imports
var questions = require('./routes/questions');

mongoose.connect('mongodb://localhost/htmlgame');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('server connected to MongoDB')
});

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));


app.get('/', function (req, res){
  res.sendFile(path.resolve(__dirname, + 'public' + 'index.html'));
});

app.use('/api', questions);

app.listen(port);
console.log(`server started on localhost:${port}`);

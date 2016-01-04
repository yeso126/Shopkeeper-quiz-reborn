const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();


mongoose.connect('mongodb://localhost/htmlgame');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('server connected to MongoDB')
});

// serve static assets normally
app.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log(`server started on localhost:${port}`);

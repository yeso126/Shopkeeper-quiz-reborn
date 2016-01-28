const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const app = express();

// Routes imports
const questions = require('./routes/questions');

mongoose.connect('mongodb://localhost/htmlgame');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('server connected to MongoDB');
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.use('/api', questions);

app.listen(port);
console.log(`server started on localhost:${port}`);

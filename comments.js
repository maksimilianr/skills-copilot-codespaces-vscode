// Create web server
// Load express module
const express = require('express');
// Load body-parser module
const bodyParser = require('body-parser');
// Load mongoose module
const mongoose = require('mongoose');
// Load Comment model
const Comment = require('./models/comment');
// Load Post model
const Post = require('./models/post');
// Create express app
const app = express();
// Set port
const port = 3000;
// Connect to MongoDB
mongoose.connect('mongodb://localhost/comment');
// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());
// Use body-parser middleware to parse URL encoded data
app.use(bodyParser.urlencoded({extended: true}));
// Create a new comment
app.post('/comment', (req, res) => {
  // Create a new comment
  const comment = new Comment({
    text: req.body.text,
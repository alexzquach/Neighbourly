/* This module will hold our connection to 
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
const mongoose = require('mongoose')

/* Connnect to our database */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/neighbourly', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


module.exports = { mongoose }  // Export the active connection.
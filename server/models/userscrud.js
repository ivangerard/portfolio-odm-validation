// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var userSchema = mongoose.Schema({
    username: String,
    fullname: String,
    password: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('users', userSchema); // nama collection

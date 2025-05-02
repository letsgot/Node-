const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    gender : String,
    age : Number,
    mobileNumber : Number
})

const User = mongoose.model('User',userSchema);

module.exports = {User};
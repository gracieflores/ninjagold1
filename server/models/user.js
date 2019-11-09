const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { 
        type: String
    }
})
   // create an object to that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

module.exports = User
const mongoose = require('mongoose')

//the information that we'll get back about users for their profile from google using google auth for logins.
const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: { //if no image for a user, there will be a broken image link and it won't look great. Just an FYI. It's not required. . 
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now //Default will assign a value if none is provided. So it will assign now as the default if none is provided. 
    }
})

/*Exporting our user schema with the name of user so that we can use it later. 
If we don't have an existing collection in the database matching, one will be created. 
Additional arguments can be created. If one is created it will be created with the name plural, i.e. user here will turn to users. */ 

module.exports = mongoose.model('User', UserSchema)
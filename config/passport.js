const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')

 //profile is the profile of the user trying to login
// done is our callback to redirect things when we're ready to do that.

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
       const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value
       }
        try {
            let user = await User.findOne({googleId: profile.id}) //checking the database to see if the user Id already exists becuase if it already exists we don't need to add them again. 
            if(user) {
                done(null, user) //if the user exists, we're doing a callback. 
                } else{
                    user = await User.create(newUser) // if the user doesn't exist we're creating a user with the above newUser object and by passing user data in the the user.js model.
                    done(null, user)
                }
            } catch (err){
                console.error(err)
            }
            }))

    // Serialize and Serialize User makes sure we are able to pass the user ID where we need it to go and hit the database with it. 
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done (err, user)
        })
    })
}
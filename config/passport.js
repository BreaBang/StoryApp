const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const passport = require('passport')
const User = require('../models/User')

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID, //SEE CONFIG.ENV
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, //SEE CONFIG.ENV
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        //profile is the profile of the user trying to login
        // done is our callback to redirect things when we're ready to do that. 
        console.log(profile)
            }
        )
    )

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
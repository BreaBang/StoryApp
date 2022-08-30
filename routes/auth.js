const express = require('express')
const passport = require('passport') //for login 
const router = express.Router()

// @desc Authenticate with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] })) //the scope is limiting to the scope to their google user profile so we can use it in the app but not other junk. 

// @desc Google auth callback
// @route GET /auth/google/callback - done logging in, where it will send them. 
//google is the strategy

router.get(
    '/google/callback', 
    passport.authenticate ('google', { failureRedirect: '/' }), //failureRedirect is sending the userback to the homepage if the login fails.
    (req, res) => {
    res.redirect('/dashboard') //if login is successful send them to the dashboard. 
    }
)


module.exports = router
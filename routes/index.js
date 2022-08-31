const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middlware/auth')
/* //destructuring - I want to bring in both of 
these at the same time from the same location.  Bringing in multiple items at the same time from the same location. */

// @desc Login / Landing Page
// @route GET /
//by adding ensureGuest in our router we can ensure people get kicked out if not logged in. 
router.get('/', ensureGuest, (req, res) => { 
    res.render('login', {
        layout: 'login',
    })
})

// @desc Dashboard
// @route GET /dashboard
//adding ensureAuth requires people to be logged in before reaching dashboard.
router.get('/dashboard', ensureAuth, (req,res) => { 
    console.log(req.user)
    res.render('dashboard')
})

module.exports = router
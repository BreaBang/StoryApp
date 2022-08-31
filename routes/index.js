const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middlware/auth')
/* //destructuring - I want to bring in both of 
these at the same time from the same location.  Bringing in multiple items at the same time from the same location. */

const Story = require('../models/Story') //adding the story model

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
router.get('/dashboard', ensureAuth, async (req,res) => { 
    try {
        const stories = await Story.find({ user: req.user.id }).lean()  // waiting for results back from database and then render page and pass the story data. Passing in story and finding user. Lean turns the mongoose data back from the database into a json object to handlebars can render it. 
        res.render('dashboard', {
            name: req.user.firstName, stories // Pass some starter data (and object here, profile properties from google) into the handlebars page for the page to render as HTML
     }) 
    } catch (err){
        console.error(err)
        res.render('error/500')
        }
  
    })

module.exports = router
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middlware/auth')
/* //destructuring - I want to bring in both of 
these at the same time from the same location.  Bringing in multiple items at the same time from the same location. */

const Story = require('../models/Story') //adding the story model

// @desc Show add page
// @route GET /stories/add
router.get('/add', ensureAuth, (req, res) => {  //ensureAuth makes sure they are logged in
    res.render('stories/add') //rendering the add stories page
})

// @desc Proess add form 
// @route POST/stories
router.post('/', ensureAuth, async (req, res) => {  //ensureAuth makes sure they are logged in 
    try {
        req.body.user = req.user.id // adds the user value to the story
        await Story.create(req.body) // populates the fields 
        res.redirect('/dashboard') //once we submit a story, it will send us back to the dashboard.

    } catch (err){
        console.error(err)
        res.render('error/500')
    }
})


module.exports = router
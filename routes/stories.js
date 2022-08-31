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

module.exports = router
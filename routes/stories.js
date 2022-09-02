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

// @desc Show all stories
// @route GET /stories/
router.get('/', ensureAuth, async (req, res) => {  //ensureAuth makes sure they are logged in. //asynch is getting the database // only need the '/' and not /stories becuase of our route in app.js
    try{
        const stories = await Story.find({ status: 'public' }) // to show all public stories we have to find the ones with the STATUS public
            .populate('user') // grabbing from the user model to fill in the card
            .sort({ createdAt: 'desc'}) // ability to sort the cards so they are in order of creation date from newest to oldest. 
            .lean() // lean takes it from a mongoose object and turns it into a plain json object so handlebars can use it. 

            res.render('stories/index', { //rending the stories template and passing in the stories object
                stories,
            })
    } catch (err) {
        console.error(err)
        res.render('error/500')

    }
})


module.exports = router
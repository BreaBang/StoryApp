const express = require('express')
const router = express.Router()

// @desc Longin/Landing Page
// @route GET /
router.get('/', (req, res) => {
    res.sendStatus('login')
})

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.sendStatus('dashboard')
})

module.exports = router
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require(`morgan`) //for login
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo') //! unlike traversy Media - don't added session here. 
const connectDB = require('./config/db')
const { default: mongoose } = require('mongoose')

// Load config by calling dotenv and creating an object with the path
dotenv.config({path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({extended: false }))
app.use(express.json())


// Logging
// quick conditional to see if we are in the dev. We're going to use morgan in the dev to see what pages are being touched. 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) //login middleware
}

// Handlebars Helpers - using destructing to pull a bunch of things from the same place
const {formatDate, stripTags, truncate, editIcon} = require('./helpers/hbs')

// Handlebars
app.engine('.hbs', exphbs.engine({ //use the hbs extension - from tutorial add .engine to exphbs to make it work.
    helpers: { // sub-object here
        formatDate,
        stripTags,
        truncate,
        editIcon
    },
    defaultLayout: 'main',  //setting main.hbs as our main layout. We should never end up with an unformatted page. 
    extname: '.hbs'
    })
)
app.set('view engine', 'hbs'); //setting view engine to handlebars

// Session Middleware - must go above passport middleware 
app.use(
    session({
        secret: 'keyboard cat',
        resave: false, // we won't save a session if nothing was modified. 
        saveUninitialized: false, //we won't create a session unless something is stored. 
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI //!! Traversy Media Change - instead of using mongoose here, pull in mongo_URI from config.env
        })
  }))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Set global var - this is for the edit function / floating icon
// next = to call the next middleware
app.use(function (req, res, next) {
    res.locals.user = req.user || null // This line is why we added "required: true to Story.js User"
    next()

})

// Static Folder named public
app.use(express.static(path.join(__dirname, 'public'))) //__dirname means go to the root directory, then look for a public folder. 

// Routes 
app.use('/', require('./routes/index')) //anything that requires a route will go to the /index file to find the correct route. 
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
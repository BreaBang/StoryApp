const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require(`morgan`) //for login
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Load config by calling dotenv and creating an object with the path
dotenv.config({path: './config/config.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// Logging
// quick conditional to see if we are in the dev. We're going to use morgan in the dev to see what pages are being touched. 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) //login middleware
}

// Handlebars
app.engine('.hbs', exphbs.engine({ //use the hbs extension - from tutorial add .engine to exphbs to make it work.
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
  }))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// Static Folder named public
app.use(express.static(path.join(__dirname, 'public'))) //__dirname means go to the root directory, then look for a public folder. 

// Routes 
app.use('/', require('./routes/index')) //anything that requires a route will go to the /index file to find the correct route. 
app.use('/dashboard', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
const express = require('express')
const dotenv = require('dotenv')
const morgan = require(`morgan`) //for login
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

// Load config by calling dotenv and creating an object with the path
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

// Logging
// quick conditional to see if we are in the dev. We're going to use morgan in the dev to see what pages are being touched. 
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev')) //login middleware
}

// Handlebars
app.engine('.hbs', exphbs.engine({ //use the hbs extension - from tutorial add .engine to exphbs to make it work.
    defaultLayout: 'main', 
    extname: '.hbs'
    })
)
app.set('view engine', 'hbs'); //setting view engine to handlebars

// Routes 
app.use('/', require('./routes/index')) //anything that requires a route will go to the /index file to find the correct route. 
app.use('/dashboard', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
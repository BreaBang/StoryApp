const express = require('express')
const dotenv = require('dotenv')
const morgan = require(`morgan`)
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

// Load config by calling dotenv and creating an object with the path
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

// Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'})); //use the hbs extension
app.set('view engine', '.hbs'); //setting view engine

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )
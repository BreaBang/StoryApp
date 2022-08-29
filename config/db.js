const mongoose = require('mongoose')

const connectDB = async () => {
    try {//catch errors that occur and try to fix them. 
        //additional items no longer needed. 
        const conn = await mongoose.connect
        (process.env.MONGO_URI)
        
        //console log if the connection is working
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1) //stop everything if there is an error. The one indicates and exit with a failure. 
    }
}

module.exports =  connectDB
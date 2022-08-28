const mongoose = require('mongoose')

const connectDB = async () => {
    try {//help prevent some connection errors
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //Below line commented out because it's no longer supported and the video is 2 years old.
            //useFindAndModify: false
        })
        //console log if the connection is working
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1) //stop everything if there is an error. The one indicates and exit with a failure. 
    }
}

module.exports =  connectDB
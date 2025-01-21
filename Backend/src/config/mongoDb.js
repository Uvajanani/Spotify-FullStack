import mongoose from "mongoose"

const connectDB = async() => {
    mongoose.connection.on('Connected', () => {
        console.log("Connection Established");        
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default connectDB




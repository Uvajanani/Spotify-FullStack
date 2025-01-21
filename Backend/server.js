import express from "express"
import cors from "cors"
import 'dotenv/config'
import songRouter from "./src/routes/SongRoute.js"
import connectDB from "./src/config/mongoDb.js"
import connectCloudinary from "./src/config/cloudinary.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


// middlewares
app.use(express.json())
app.use(cors())


// initalizing routes
app.use("/api/song", songRouter)
app.get('/', (req,res) => res.send("API Working"))


// starting the express app
app.listen(port, () => console.log("Server started"))
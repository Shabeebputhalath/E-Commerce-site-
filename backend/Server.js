import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRoutes from './routes/userRoute.js'
import productRoutes from './routes/productRoute.js'
import cartRoutes from './routes/cartRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
// Connect to DB
connectDB()

// Connect to Cloudinary
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})
app.use('/api/user', userRoutes)  
app.use('/api/product', productRoutes)
app.use('/api/cart', userRoutes)  // Cart routes are handled in userRoutes


app.listen(port, () => console.log('Server started on PORT : ' + port));
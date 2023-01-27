const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api/games', require('./routes/testRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port: ${port}`.green))


const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/games', require('./routes/testRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port: ${port}`))

// Entry point to our back-end
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

//Connect to database
connectDB()

const app = express()

// this will allowe send us ra JSON
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// to create a route or app.get('/api/users'
app.get('/', (req, res) => {
  // res.send('Hello')
  res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

// Routes - sending req to useRoutes - for instance the POST listening of method res.send('Register Route')
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
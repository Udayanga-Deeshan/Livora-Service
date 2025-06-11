const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const PORT = 3001
mongoose.connect(process.env.MONGO_URL) // No options needed anymore
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => console.error(' Connection error:', err.message));

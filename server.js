const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//import the routers
const router1 = require('./routes/route1')
const router2 = require('./routes/route2')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//connect the database
const { connection, connect } = mongoose

const uri = process.env.KEY
connect(uri, { useNewUrlParser: true, useCreateIndex: true })
connection.once('open', () => console.log('MongoDb connection established'))




// middleware for routes 
app.use('/route1', router1)
app.use('/route2', router2)

app.listen(port, () => console.log(`Server running on port ${port}`))

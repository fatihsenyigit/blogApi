

"use strict"

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use(express.json())

// catch error from async
require('express-async-errors')

// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

app.all('/', (req, res) => {
    res.send('welcome to blog api')
})

//routes
app.use('/blog', require('./src/routes/blogRouter'))
app.use('/user', require('./src/routes/userRouter'))



//catch error
app.use(require('./src/errorHandler'))


app.listen(PORT, ()=> console.log('running: http://27.0.0.1:'+ PORT))


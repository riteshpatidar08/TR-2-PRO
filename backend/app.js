const express = require('express') ;
const colors = require('colors')
const app = express() ;
const PORT = 3000 ;
const dbConnect = require('./db')
const errorHandler  = require('./middleware/errorHandler')
require('dotenv').config()
const cors = require('cors')
//parse the data from the req.body
app.use(cors()) ;


app.use(express.json());

dbConnect()


app.use('/api',require('./routes/userRoutes'))

//global route handler 
app.use((req,res,next)=>{
    res.status(404).send(`requested url ${req.url} not found`)
    next()
})

//global error handler middleware
app.use(errorHandler) ;


app.listen(PORT , ()=>{
    console.log(colors.yellow(`App is listening on the PORT:${PORT}`))
})
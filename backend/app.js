const express = require('express') ;
const colors = require('colors')
const app = express() ;
const PORT = 3000 ;
const dbConnect = require('./db')
const errorHandler  = require('./middleware/errorHandler')
//parse the data from the req.body
app.use(express.json());

dbConnect()


app.use('/api',require('./routes/userRoutes'))

//global error handler middleware
app.use(errorHandler) ;

app.listen(PORT , ()=>{
    console.log(colors.yellow(`App is listening on the PORT:${PORT}`))
})
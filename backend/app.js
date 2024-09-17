const express = require('express') ;
const colors = require('colors')
const app = express() ;
const PORT = 3000 ;
const dbConnect = require('./db')

//parse the data from the req.body
app.use(express.json());

dbConnect()








app.use('/api',require('./routes/userRoutes'))

app.listen(PORT , ()=>{
    console.log(colors.yellow(`App is listening on the PORT:${PORT}`))
})
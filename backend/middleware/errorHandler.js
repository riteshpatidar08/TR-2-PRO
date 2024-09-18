
const errorHandler = (err,req,res,next) => {
      let statusCode = 500 ;
      let errMessage = "Internal Server error"
    //   console.log(err)
console.log('global handler runs')
      if(err.name === 'ValidationError'){
        console.log('error',err.errors)
        console.log(Object.value(err.errors))
        const message = Object.values(err.errors).map((val)=>{
            return val.messsage
        })
        statusCode = 400 
        errMessage = message
      } else {
        console.log(err)
      }

      res.status(statusCode).json({
        message : errMessage
      })

}



module.exports = errorHandler


//requirement 

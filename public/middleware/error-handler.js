const errorHandlerMiddleware=(err,req,res,next)=>{
    return res.status(500).json("somthing went wrong")
}

module.exports = errorHandlerMiddleware;
const notFound= (res,req)=> res.status(404).send('route does not exist')

module.exports=notFound
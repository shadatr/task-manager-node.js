const express = require("express");
const app = express();
const tasksRouter = require("./public/routers/tasks"); 
const connectDb = require("./public/db/connect");
require('dotenv').config()
const notFound= require('./public/middleware/not-found')
const errorHandlerMiddleware = require("./public/middleware/error-handler");
app.use(express.static("./public"))
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter); 
app.use(notFound)
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();

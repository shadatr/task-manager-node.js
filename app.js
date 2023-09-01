const express = require("express");
const app = express();
const tasksRouter = require("./public/routers/tasks"); 
const connectDb = require("./public/db/connect");
require('dotenv').config()

app.get("/hello", (req, res) => {
  res.send("management app");
});

app.use(express.json());
app.use("/api/v1/tasks", tasksRouter); 

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
};

start();

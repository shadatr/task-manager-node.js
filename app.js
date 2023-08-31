const express = require("express");
const app = express();
const tasksRouter = require("./public/routers/tasks"); // Update the import statement

const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("management app");
});

app.use("/api/v1/tasks", tasksRouter); // Use tasksRouter instead of tasks

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});

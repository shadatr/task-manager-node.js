const getAllTasks = (req,res)=>{
    res.send('all tasks')
}

const createTasks = (req, res) => {
  res.send("create task");
};
const getTask = (req, res) => {
  res.json(res.body);
};
const updateTask = (req, res) => {
  res.send("create task");
};
const deleteTasks = (req, res) => {
  res.send("update task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,deleteTasks
};
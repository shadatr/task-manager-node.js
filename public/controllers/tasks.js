const getAllTasks = (req,res)=>{
    res.send('all tasks')
}

const createTasks = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({id:req.params.id});
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTasks = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTasks,
};
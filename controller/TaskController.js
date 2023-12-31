const Task = require("../models/Task");

const getallTasks = async (req, res) => {
    
  try {
    const taskList = await Task.find();
    return res.render("index", { taskList, task: null, taskDelete: null });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
  
};
const createTask = async (req, res) => {
    const task = req.body;
    if (!task.name) {
      return res.redirect("/");
    }
  
    try {
      await Task.create(task);
      return res.redirect("/");
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
  const getById = async (req, res) => {
    try {
      if (req.params.method == "update") {
        const task = await Task.findOne({ _id: req.params.id });
        return res.render("index", { taskList: [task], task, taskDelete: null });
      } else {
        const taskDelete = await Task.findOne({ _id: req.params.id });
        return res.render("index", {
          taskList: [taskDelete],
          task: null,
          taskDelete,
        });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
  const updateOneTask = async (req, res) => {
    try {
      const task = req.body;
      await Task.updateOne({ _id: req.params.id }, task);
      res.redirect("/");
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
  const deleteOneTask = async (req,res,) =>{
    try{
      await Task.deleteOne({_id:req.params.id})
      res.redirect("/")
  
    }
    catch(err){
      res.status(500).send({error: err.message})
    }
  }

module.exports = {
  getallTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
};

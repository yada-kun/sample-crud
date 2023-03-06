const taskRouter = require("express").Router();
const taskController = require("../controller/task.controller");

// /api/v1/tasks

taskRouter
  .route("/")
  .get(taskController.getAllTask)
  .post(taskController.createTask);

taskRouter
  .route("/:id")
  .get()
  .patch(taskController.updateStatus)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = taskRouter;

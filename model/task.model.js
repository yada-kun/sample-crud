const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  status: {
    type: String,
    default: "pending",
  },
});

const Task = model("Task", taskSchema);
module.exports = Task;

const Task = require("../model/task.model");

// get all task
const getAllTask = async (request, response) => {
  try {
    const getAllTask = await Task.find();
    response.status(201).json({ status: "Success", data: getAllTask });
  } catch (error) {
    console.log(error);
  }
};

// Create tasks
const createTask = async (request, response) => {
  const {
    body: { title },
    body,
  } = request;

  try {
    if (!body.title) return response.status(404).send("Title not fould");

    const checkDuplicate = await Task.findOne({ title });

    if (checkDuplicate)
      return response.status(400).send("duplicate user found");

    const task = await Task.create(body);
    return response.status(201).json({ status: "data added", data: task });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (request, response) => {
  const { id } = request.params;
  const { title, status } = request.body;

  try {
    if (!id) return response.status(404).send("Id not found");
    if (!title || !title.trim())
      return response.status(404).send("title not found");

    const updateUser = await Task.findByIdAndUpdate(
      id,
      { title, status },
      { new: true }
    );

    if (!updateUser) return response.status(404).send("Data not found");

    return response.status(201).json({ status: "sucess", data: updateUser });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (request, response) => {
  const { id } = request.params;

  try {
    if (!id) return response.status(404).send("Id not found");

    const deleteTask = await Task.findByIdAndDelete(id);

    return response
      .status(201)
      .json({ status: "sucess", data: `${deleteTask.title} is deleted` });
  } catch (error) {
    console.log(error);
  }
};

const updateStatus = async (request, response) => {
  const { id } = request.params;

  try {
    if (!id) return response.status(404).send("id not found");

    const updateTask = await Task.findByIdAndUpdate(
      id,
      { status: "completed" },
      { new: true }
    );

    return response.status(201).json({ status: "success", data: updateTask });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
  updateStatus,
};

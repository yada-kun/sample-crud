const express = require("express");
const mongoose = require("mongoose");

// modules
const connectDB = require("./config/connect");
const taskRouter = require("./route/task.controller");

const app = express();
const port = 4000;

// middleware
app.use(express.json());

connectDB();

app.use("/api/v1/tasks", taskRouter);

mongoose.connection.once("open", () => {
  app
    .listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    )
    .on("error", () => {
      process.exit(1);
    });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

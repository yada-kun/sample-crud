const mongoose = require("mongoose");

const connectDB = async () => {
  const databaseUri =
    "mongodb+srv://admin:admin123@b253-anuncio.kilox2p.mongodb.net/simplecrud?retryWrites=true&w=majority";

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(databaseUri);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

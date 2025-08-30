const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ismailkhanofficialworks:HrmSolPioneer@cluster0.nu9qb.mongodb.net/HRM"
  );
};

module.exports = connectDB;

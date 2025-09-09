// const mongoose = require("mongoose");
// const connectDB = async () => {
//   await mongoose.connect(
//     "mongodb+srv://ismailkhanofficialworks:HrmSolPioneer@cluster0.nu9qb.mongodb.net/HRM"
//   );
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://parvezspdev:Parvez123@cluster0.zvc6kxz.mongodb.net/HRM"
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // exit process if connection fails
  }
};

module.exports = connectDB;

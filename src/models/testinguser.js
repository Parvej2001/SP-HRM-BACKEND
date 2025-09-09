const mongoose = require("mongoose");

const testingUserSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  city: { type: String, required: true }
});

module.exports = mongoose.model("TestingUser", testingUserSchema);

// const mongoose = require("mongoose");
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"],
    minlength: [2, "First name must be at least 2 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department", // relation with Department
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

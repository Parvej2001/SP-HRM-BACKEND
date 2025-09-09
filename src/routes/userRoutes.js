const express = require("express");
const router = express.Router();
const User = require("../models/user");

// ✅ Add User with validation + department reference
router.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User added successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get all users with department populated
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("department"); // 👈 populate dept details
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const TestingUser = require("../models/testinguser"); // import schema

// ✅ 1. Add User (POST)
router.post("/add", async (req, res) => {
  try {
    const newUser = new TestingUser(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 2. Update User (PUT)
router.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await TestingUser.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 3. Delete User (DELETE)
router.delete("/delete/:id", async (req, res) => {
  try {
    await TestingUser.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

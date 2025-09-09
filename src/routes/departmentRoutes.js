const express = require("express");
const router = express.Router();
const Department = require("../models/department");

// ✅ Add Department
router.post("/add", async (req, res) => {
  try {
    const dept = new Department(req.body);
    await dept.save();
    res.status(201).json({ message: "Department added successfully", dept });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// ✅ Get all Departments
router.get("/", async (req, res) => {
  try {
    const depts = await Department.find();
    res.json(depts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

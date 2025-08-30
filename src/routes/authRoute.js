const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const { validateLogin } = require("../utils/validation.js");

router.post("/auth/register", async (req, res, next) => {
  try {
    // const password = "John@123";
    // const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash, "testpasswordhash");
    // const user = await User.find({});
    // console.log(user, "testuse");
    res.send(passwordHash);
  } catch (err) {
    res.status(400).send("Error Occured", err.message);
  }
  c;
});

router.post("/auth/login", async (req, res, next) => {
  try {
    console.log("Request Received");
    validateLogin(req);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).send("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword({
      userInputPassword: password,
    });
    if (!isPasswordValid) {
      res.status(400).send("Invalid Credentials");
    } else {
      const token = await user.getJWT();
      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });
      res.json({
        message: "User logged In Successfully",
        status: 1,
        data: user,
      });
    }
  } catch (err) {
    res.status(400).send("Error", err.message);
  }
});

module.exports = router;

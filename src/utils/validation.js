const validator = require("validator");

const validateLogin = (req) => {
  const { password, email } = req.body;
  if (!validator.isEmail(email)) {
    throw new Error("Email not valid!");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not Valid!");
  }
};

module.exports = {
  validateLogin,
};

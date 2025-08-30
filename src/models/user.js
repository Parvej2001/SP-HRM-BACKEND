const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  NATIONALITY_CODES,
  UAC,
  RELATIONSHIP_STATUS,
  GENDER,
  USER_STATUS,
} = require("../constants/user");
const { Schema } = mongoose;

const nameValidation = {
  type: String,
  minlength: 3,
  required: true,
};
const userSchema = new Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    staffId: {
      type: Number,
    },
    firstName: {
      en: nameValidation,
      ar: nameValidation,
    },
    lastName: {
      en: nameValidation,
      ar: nameValidation,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          if (!validator.isEmail(value)) {
            throw new Error("Email is not Valid");
          }
        },
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          if (!validator.isStrongPassword(value)) {
            throw new Error("Password is not Strong!!");
          }
        },
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          const isValidPhone = /^(\+9665|05|5)([0-9]{8})$/.test(v);
          if (!isValidPhone) {
            throw new Error("Phone Number is Not Valid!!!");
          }
        },
      },
    },
    age: {
      type: Number,
      min: 18,
      required: true,
    },
    nationality: {
      type: String,
      enum: NATIONALITY_CODES,
    },
    uac: {
      type: String,
      enum: Object.values(UAC),
    },
    loginTime: {
      type: String,
    },
    logOutTime: {
      type: String,
    },
    // martialStatus: {
    //   type: String,
    //   enum: Object.value(    =TIONSHIP_STATUS),
    // },
    gender: {
      type: String,
      enum: Object.values(GENDER),
    },
    userStatus: {
      type: String,
      enum: Object.values(USER_STATUS),
    },
    workHours: {
      type: Number,
    },
    overtime: {
      type: String,
    },
    joinedDate: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function ({ userInputPassword }) {
  try {
    console.log("testdata");
    const user = this;
    const isPasswordValid = await bcrypt.compare(
      userInputPassword,
      user.password
    );
    console.log(isPasswordValid, "in Check func");
    return isPasswordValid;
  } catch (err) {
    res.status(400).send("Err", err.message);
  }
};

userSchema.methods.getJWT = async function () {
  try {
    const user = this;
    const token = await jwt.sign({ userId: user._id }, "DevTinder@123");
    return token;
  } catch (err) {
    res.status(400).send("JWT Generate failed!");
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;

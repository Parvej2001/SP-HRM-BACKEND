const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const authRouter = require("./routes/authRoute");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/", authRouter);

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(400).send(err.message, "Error Occured");
  }
});

connectDB()
  .then(() => {
    console.log("DB Connected Successfuly!");

    app.listen(7000, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => console.log(err.message));

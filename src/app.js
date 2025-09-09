// const express = require("express");
// const connectDB = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const app = express();
// const mongoose = require("mongoose");

// const uri = "mongodb+srv://ismailkhanofficialworks:HrmSolPioneer@cluster0.zvc6kxz.mongodb.net/HRM";

// mongoose.connect(uri)
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch(err => console.error("❌ MongoDB Connection Error:", err));


// const authRouter = require("./routes/authRoute");

// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
// app.use(cookieParser());

// app.use("/", authRouter);

// app.use("/", (err, req, res, next) => {
//   if (err) {
//     res.status(400).send(err.message, "Error Occured");
//   }
// });

// connectDB()
//   .then(() => {
//     console.log("DB Connected Successfuly!");

//     app.listen(7000, () => {
//       console.log("Server Started");
//     });
//   })
//   .catch((err) => console.log(err.message));

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/database"); // import database.js
const userRoutes = require("./routes/userRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/departments", departmentRoutes);

// ✅ Connect to MongoDB
connectDB();

// ✅ Routers
const authRouter = require("./routes/authRoute");
const testinguserRoutes = require("./routes/testinguserRoutes");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// ✅ Register routes
app.use("/", authRouter);
app.use("/api/testingusers", testinguserRoutes);

// ✅ Error handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send(err.message || "Error Occurred");
  }
});

// ✅ Start server
app.listen(7000, () => {
  console.log("🚀 Server started on port 7000");
});


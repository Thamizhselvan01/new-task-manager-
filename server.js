const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRouters"); // Assuming you have a router defined in this path
require("dotenv").config();

const port = process.env.PORT || 3000;
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", taskRoutes); // Use the task routes defined in your router


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

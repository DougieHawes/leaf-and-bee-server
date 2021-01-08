// environment variables
const dotenv = require("dotenv");

dotenv.config();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

// connect to the mongodb
const mongoose = require("mongoose");

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

// setup express app
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const postRoute = require("./routes/api/post.js");
const userRoute = require("./routes/api/user.js");

app.use("/api/post", postRoute);
app.use("/api/user", userRoute);

app.listen(port, console.log(`app running on port:${port}`));

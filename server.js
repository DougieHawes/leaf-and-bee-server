// environment variables
require("dotenv").config();

const port = process.env.PORT;

// setup express app
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Leaf and Bee Gardens" });
});

app.listen(port, console.log(`app running on port:${port}`));

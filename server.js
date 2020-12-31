// environment variables
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

// setup express app
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ msg: "Hello World! from the server" });
});

app.listen(port, console.log(`app running on port:${port}`));

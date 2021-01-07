require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes");

const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Node");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

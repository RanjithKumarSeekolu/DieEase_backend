require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
app.get("/", (req, res) => {
  return res.send("DineEase backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(require("./src/routes"));

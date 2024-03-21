const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("from tableRoutes");
});

module.exports = router;

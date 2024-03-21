const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("from super admin routes");
});

module.exports = router;

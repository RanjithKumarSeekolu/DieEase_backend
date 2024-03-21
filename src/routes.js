const express = require("express");
const router = express.Router();

// tables
const table = require("./modules/tables");
router.use("/table/", table);

//superAdmin
const superAdmin = require("./modules/SuperAdmin");
router.use("/superAdmin/", superAdmin);

module.exports = router;

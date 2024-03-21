const express = require("express");

const tableApp = express();

// tableroutes
const tableRoutes = require("./table");
tableApp.use(tableRoutes);

module.exports = tableApp;

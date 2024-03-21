const express = require("express");
const app = express();

const superAdminRoutes = require("./superAdmin");
app.use(superAdminRoutes);

module.exports = app;

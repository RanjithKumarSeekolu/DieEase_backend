// sequelize.config.js

const { Sequelize } = require("sequelize");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require("../config.js");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

async function checkSequilize() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    sequelize
      .sync({ force: false })
      .then(() => {
        console.log("Database synchronization succeeded.");
      })
      .catch((error) => {
        console.log("Error during database synchronization:", error);
      });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkSequilize();
module.exports = sequelize;

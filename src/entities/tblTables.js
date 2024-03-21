// table.model.js

const { DataTypes } = require("sequelize");
const sequelize = require("../../DB_Connection/sequelize.config");
const { v4: uuidv4 } = require("uuid");

const Table = sequelize.define("tbl_tables", {
  TABLE_ID: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  TABLE_NUMBER: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SEATS: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  IS_OCCUPIED: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Table;

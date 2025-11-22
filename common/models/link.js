const { DataTypes } = require("sequelize");
const { nanoid } = require("nanoid");

const LinkModel = {
  id: { type: DataTypes.STRING(6), defaultValue: () => nanoid(6), allowNull: false, primaryKey: true },
  url: { type: DataTypes.STRING, allowNull: false, unique: false },
  visited: { type: DataTypes.INTEGER, defaultValue: 0 },
};

module.exports = (sequelize) => sequelize.define("link", LinkModel);

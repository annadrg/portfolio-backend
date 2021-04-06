"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tag.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      color: { type: DataTypes.STRING, defaultValue: "#ffffff" },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return tag;
};
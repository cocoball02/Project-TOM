"use strict";
const { Model } = require("sequelize");
const crypto = require("crypto");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      trade_name: DataTypes.STRING,
      business_number: DataTypes.INTEGER,
      user_type: DataTypes.INTEGER,
      user_admission: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (data, options) => {
          data.password = crypto
            .createHmac("sha256", "tomtom")
            .update(data.password)
            .digest("hex");
        },
      },
      sequelize,
    },
    {
      modelName: "users",
    }
  );
  return users;
};

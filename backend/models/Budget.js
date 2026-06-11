const { DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const User = require("./User");

const Budget = sequelize.define(
  "Budget",
  {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);


// RELATIONSHIP
User.hasMany(Budget, {
  foreignKey: "userId",
});

Budget.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = Budget;
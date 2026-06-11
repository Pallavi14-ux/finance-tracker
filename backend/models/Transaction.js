const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Transaction = sequelize.define(
  "Transaction",
  {
    type: {
      type: DataTypes.ENUM("income", "expense"),
      allowNull: false,
    },

    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }
);


// Relationship
User.hasMany(Transaction, {
  foreignKey: "userId",
});

Transaction.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = Transaction;
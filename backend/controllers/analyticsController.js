const Transaction = require("../models/Transaction");

const { Sequelize } = require("sequelize");
// DASHBOARD SUMMARY
const getDashboardData = async (req, res) => {
  try {

    // TOTAL INCOME
    const totalIncome =
      await Transaction.sum("amount", {
        where: {
          userId: req.user.id,
          type: "income",
        },
      });

    // TOTAL EXPENSE
    const totalExpense =
      await Transaction.sum("amount", {
        where: {
          userId: req.user.id,
          type: "expense",
        },
      });

    // RECENT TRANSACTIONS
    const recentTransactions =
      await Transaction.findAll({
        where: {
          userId: req.user.id,
        },

        order: [["createdAt", "DESC"]],

        limit: 5,
      });

    const income = totalIncome || 0;

    const expense = totalExpense || 0;

    const savings = income - expense;

    res.status(200).json({
      totalIncome: income,
      totalExpense: expense,
      totalSavings: savings,
      recentTransactions,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CATEGORY ANALYTICS
const getCategoryAnalytics = async (
  req,
  res
) => {
  try {

    const categories =
      await Transaction.findAll({

        where: {
          userId: req.user.id,
          type: "expense",
        },

        attributes: [
          "category",

          [
            Sequelize.fn(
              "SUM",
              Sequelize.col("amount")
            ),
            "total",
          ],
        ],

        group: ["category"],
      });

    res.status(200).json(categories);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// MONTHLY ANALYTICS
const getMonthlyAnalytics = async (
  req,
  res
) => {
  try {

    const monthlyData =
      await Transaction.findAll({

        where: {
          userId: req.user.id,
        },

        attributes: [

          [
            Sequelize.fn(
              "DATE_FORMAT",
              Sequelize.col("date"),
              "%Y-%m"
            ),
            "month",
          ],

          "type",

          [
            Sequelize.fn(
              "SUM",
              Sequelize.col("amount")
            ),
            "total",
          ],
        ],

        group: ["month", "type"],

        order: [
          [
            Sequelize.literal("month"),
            "ASC",
          ],
        ],
      });

    res.status(200).json(monthlyData);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
  getCategoryAnalytics,
  getMonthlyAnalytics,
};
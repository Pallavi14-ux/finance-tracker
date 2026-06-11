const Transaction = require("../models/Transaction");


// ADD TRANSACTION
const addTransaction = async (req, res) => {
  try {

    const {
      type,
      amount,
      category,
      description,
      date,
    } = req.body;

    // Validation
    if (
      !type ||
      !amount ||
      !category ||
      !date
    ) {
      return res.status(400).json({
        message: "Please fill required fields",
      });
    }

    // Create transaction
    const transaction = await Transaction.create({
      type,
      amount,
      category,
      description,
      date,
      userId: req.user.id,
    });

    res.status(201).json(transaction);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET USER TRANSACTIONS
const getTransactions = async (req, res) => {
  try {

    const transactions =
      await Transaction.findAll({
        where: {
          userId: req.user.id,
        },

        order: [["date", "DESC"]],
      });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE TRANSACTION
const updateTransaction = async (req, res) => {
  try {

    const transaction =
      await Transaction.findByPk(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    // Check ownership
    if (transaction.userId !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await transaction.update(req.body);

    res.status(200).json(transaction);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE TRANSACTION
const deleteTransaction = async (req, res) => {
  try {

    const transaction =
      await Transaction.findByPk(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    // Check ownership
    if (transaction.userId !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await transaction.destroy();

    res.status(200).json({
      message: "Transaction deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
};
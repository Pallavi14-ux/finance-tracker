const Budget = require("../models/Budget");


// CREATE BUDGET
const createBudget = async (req, res) => {
  try {

    const {
      category,
      amount,
      month,
    } = req.body;

    // Validation
    if (
      !category ||
      !amount ||
      !month
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    // Check existing budget
    const existingBudget =
      await Budget.findOne({
        where: {
          userId: req.user.id,
          category,
          month,
        },
      });

    if (existingBudget) {
      return res.status(400).json({
        message:
          "Budget already exists for this category and month",
      });
    }

    // Create budget
    const budget = await Budget.create({
      category,
      amount,
      month,
      userId: req.user.id,
    });

    res.status(201).json(budget);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET USER BUDGETS
const getBudgets = async (req, res) => {
  try {

    const budgets = await Budget.findAll({
      where: {
        userId: req.user.id,
      },

      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(budgets);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE BUDGET
const updateBudget = async (req, res) => {
  try {

    const budget = await Budget.findByPk(
      req.params.id
    );

    if (!budget) {
      return res.status(404).json({
        message: "Budget not found",
      });
    }

    // Ownership check
    if (budget.userId !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await budget.update(req.body);

    res.status(200).json(budget);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE BUDGET
const deleteBudget = async (req, res) => {
  try {

    const budget = await Budget.findByPk(
      req.params.id
    );

    if (!budget) {
      return res.status(404).json({
        message: "Budget not found",
      });
    }

    // Ownership check
    if (budget.userId !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await budget.destroy();

    res.status(200).json({
      message: "Budget deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
};
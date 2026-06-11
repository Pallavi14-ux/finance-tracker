const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
} = require("../controllers/budgetController");

const router = express.Router();


// CREATE + GET
router
  .route("/")
  .post(protect, createBudget)
  .get(protect, getBudgets);


// UPDATE + DELETE
router
  .route("/:id")
  .put(protect, updateBudget)
  .delete(protect, deleteBudget);

module.exports = router;
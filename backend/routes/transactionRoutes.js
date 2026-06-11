const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();


// ADD + GET
router
  .route("/")
  .post(protect, addTransaction)
  .get(protect, getTransactions);


// UPDATE + DELETE
router
  .route("/:id")
  .put(protect, updateTransaction)
  .delete(protect, deleteTransaction);

module.exports = router;
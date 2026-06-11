const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  getDashboardData,
  getCategoryAnalytics,
  getMonthlyAnalytics,
} = require("../controllers/analyticsController");

const router = express.Router();


// DASHBOARD
router.get(
  "/dashboard",
  protect,
  getDashboardData
);


// CATEGORY ANALYTICS
router.get(
  "/categories",
  protect,
  getCategoryAnalytics
);


// MONTHLY ANALYTICS
router.get(
  "/monthly",
  protect,
  getMonthlyAnalytics
);

module.exports = router;
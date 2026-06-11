const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


// Protected Route
router.get("/profile", protect, async (req, res) => {

  res.status(200).json({
    message: "Protected Route Accessed",
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    },
  });

});

module.exports = router;
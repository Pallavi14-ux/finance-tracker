const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  try {

    // Check authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {

      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Get user from DB
      const user = await User.findByPk(decoded.id);

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      // Attach user to request
      req.user = user;

      next();

    } else {
      return res.status(401).json({
        message: "No token provided",
      });
    }

  } catch (error) {
    return res.status(401).json({
      message: "Token failed",
    });
  }
};

module.exports = protect;
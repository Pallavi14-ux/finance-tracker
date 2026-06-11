const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(
  "/api/transactions",
  require("./routes/transactionRoutes")
);
app.use(
  "/api/budgets",
  require("./routes/budgetRoutes")
);
app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);
app.get("/", (req, res) => {
  res.send("Finance Tracker API Running");
});

sequelize
  .sync()
  .then(() => {
    console.log("Database Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

  console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./configs/mongoConfig");

const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
// const analyticsRoutes = require("./routes/analytics");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(logger);

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
// app.use("/analytics", analyticsRoutes);

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Social Media Analytics API" });
});

// Error handler
app.use(errorHandler);

// Start server after DB connection
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const connectDB = require("./configs/mongoConfig");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const analyticsRoutes = require("./routes/analytics");

const logger = require("./middleware/login");
const errorHandler = require("./middleware/errorHandler");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use(logger);

app.use("/users",userRoutes);
app.use("/posts",postRoutes);
app.use("/comments",commentRoutes);
app.use("/analytics",analyticsRoutes);

app.get("/",(req,res)=>{
    res.status(404).json({message:"Undefind Route"})
});

app.use(errorHandler);

connectDB();
app.listen(PORT,()=>{
    console.log("Server is running On port",PORT)
})
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mealRouter = require("./routes/meal.route");
const orderRouter = require("./routes/order.route");
const corsOption = require("./config/corsOption");
const connectDB = require("./db/connect");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(cookieParser());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(cors(corsOption));

app.use("/meals", mealRouter);
app.use("/orders", orderRouter);

connectDB(process.env.MONGODB_CONNECTION_URL);

module.exports = app;

require("dotenv").config();
const colors = require("colors");

const Meal = require("./models/meal.model");
const connectDB = require("./db/connect");

const mealsData = require("./data/meals.data");

const start = async () => {
  try {
    // connectDB
    connectDB(process.env.MONGODB_CONNECTION_URL);

    // delete old data
    await Meal.deleteMany();
    console.log("Deleted old meals data".blue);

    // create new data

    // Meals data
    await Meal.create(mealsData);
    console.log("Added new meals data".blue);

    console.log("Database populated successfully!".green);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();

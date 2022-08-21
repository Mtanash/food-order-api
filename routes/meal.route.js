const express = require("express");
const { getAllMeals, getMealById } = require("../controllers/meal.controller");

const mealRoute = express.Router();

mealRoute.get("/", getAllMeals);
mealRoute.get("/:id", getMealById);

module.exports = mealRoute;

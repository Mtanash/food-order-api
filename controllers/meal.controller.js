const mongoose = require("mongoose");
const Meal = require("../models/meal.model");

const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

const getMealById = async (req, res) => {
  const mealId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(mealId)) {
    return res.status(404).json({ message: "Please provide a valid id." });
  }

  try {
    const meal = await Meal.findById(mealId);
    res.json(meal);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllMeals, getMealById };

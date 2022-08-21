const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a valid name"],
  },
  description: {
    type: String,
    required: [true, "Please provide a valid description"],
  },
  picture: {
    type: String,
    required: [true, "Please provide a valid picture"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a valid price"],
  },
});

const Meal = mongoose.model("meal", mealSchema);

module.exports = Meal;

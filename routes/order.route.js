const express = require("express");
const addNewOrder = require("../controllers/order.controller");

const orderRoute = express.Router();

orderRoute.post("/", addNewOrder);

module.exports = orderRoute;

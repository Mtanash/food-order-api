const Order = require("../models/order.model");

const addNewOrder = async (req, res) => {
  try {
    const orderData = req.body;

    const createdOrder = new Order(orderData);
    await createdOrder.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = addNewOrder;

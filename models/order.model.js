const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "meal",
        required: true,
      },
      quantity: {
        type: Number,
        min: 1,
      },
    },
  ],
  data: {
    name: String,
    street: String,
    postalCode: String,
    city: String,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;

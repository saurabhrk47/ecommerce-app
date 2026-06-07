const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
} = require("../controllers/orderController");

const {
  protect,
} = require("../middleware/authMiddleware");

// Create New Order
router.post(
  "/",
  protect,
  createOrder
);

// Get Logged In User Orders
router.get(
  "/",
  protect,
  getOrders
);

module.exports = router;
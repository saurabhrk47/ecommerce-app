const Cart = require("../models/Cart");

// Add To Cart
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const existingItem = await Cart.findOne({
      user,
      product,
    });

    if (existingItem) {
      existingItem.quantity += quantity || 1;

      await existingItem.save();

      return res.status(200).json({
        success: true,
        cartItem: existingItem,
      });
    }

    const cartItem = await Cart.create({
      user,
      product,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      cartItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Cart Items
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find()
      .populate("user", "-password")
      .populate("product");

    res.status(200).json({
      success: true,
      count: cartItems.length,
      cartItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCartItems,
};
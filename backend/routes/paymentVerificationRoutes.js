const express = require("express");
const router = express.Router();

const {
  verifyPayment,
} = require("../controllers/paymentVerificationController");

router.post("/verify", verifyPayment);

module.exports = router;
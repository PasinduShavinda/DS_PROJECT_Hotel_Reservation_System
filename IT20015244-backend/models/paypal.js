const mongoose = require("mongoose");

const paypalSchema = new mongoose.Schema({
  cpayment: {
    type: Number,
    required: true,
  },
  cname: {
    type: String,
    required: true,
  },

  cemail: {
    type: String,
    required: true,
  },

  cpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Paypal", paypalSchema);

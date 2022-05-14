const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// import routes

//udara..............
const cardpay = require("../IT20015244-backend/routes/cardpay");
const paypal = require("../IT20015244-backend/routes/paypal");

// Middlewares
app.use(bodyParser.json());
app.use(cors());
// routs.middlewares
app.use(cardpay);
app.use(paypal);

const PORT = 8003;

const DB_URL =
  "mongodb+srv://dsProj123:dsp2yAbc@dsprojectcluster.iiyxv.mongodb.net/DSDB?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log("DB connection error !!", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

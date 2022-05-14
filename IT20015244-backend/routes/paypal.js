const express = require("express");
const Paypal = require("../models/paypal");
const router = express.Router();

router.post("/postPaypal/save", (req, res) => {
  let newPaypal = new Paypal(req.body);

  newPaypal.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Paypal saved successfully",
    });
  });
});

///get paypal
router.get("/postPaypal", (req, res) => {
  Paypal.find().exec((err, paypal) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      existingpaypal: paypal,
    });
  });
});

//get a specific paypal id
router.get("/postPaypal/:id", (req, res) => {
  let PaypalId = req.params.id;

  Paypal.findById(PaypalId, (err, paypal) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      paypal,
    });
  });
});

//update paypal
router.put("/postPaypal/update/:id", (req, res) => {
  Paypal.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, paypal) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});

//delete post
router.delete("/postPaypal/delete/:id", (req, res) => {
  Paypal.findByIdAndRemove(req.params.id).exec((err, deletedpaypal) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsucceful",
        err,
      });

    return res.json({
      message: "Delete succefull",
      deletedpaypal,
    });
  });
});

module.exports = router;

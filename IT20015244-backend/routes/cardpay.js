const express = require("express");
const Card = require("../models/cardpay");
const router = express.Router();
const path = require("path");
//save.......
router.post("/postCard/save", (req, res) => {
  let newCard = new Card(req.body);

  newCard.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Card saved successfully",
    });
  });
});

//get card...
router.get("/postCard", (req, res) => {
  Card.find().exec((err, card) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: true,
      existingcard: card,
    });
  });
});

//get a specific card id update/edit
router.get("/postCard/:id", (req, res) => {
  let CardId = req.params.id;
  Card.findById(CardId, (err, card) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      card,
    });
  });
});

//update card
router.put("/postCard/update/:id", (req, res) => {
  Card.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, card) => {
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
router.delete("/postCard/delete/:id", (req, res) => {
  Card.findByIdAndRemove(req.params.id).exec((err, deletedcard) => {
    if (err)
      return res.status(400).json({
        message: "Deleted Unsuccessfully",
        err,
      });

    return res.json({
      message: "Deleted successfull",
      deletedcard,
    });
  });
});

module.exports = router;

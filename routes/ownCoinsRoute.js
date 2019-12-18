var express = require("express");
var router = express.Router();
var OwnCoins = require("../models/OwnCoins");
var User = require("../models/User");

// include CLOUDINARY:
const parser = require("../configs/cloudinary-setup");

var _id = "";

// Cloudinary upload

router.post("/image", parser.single("img"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  console.log("Image en background");

  // from cloud that is the parsers
  const img = req.file.secure_url;
  console.log("img : ", img);
  res.json(img);
});

router.post("/add", async (req, res, next) => {

  const { name, price, type, id, symbol, img, description, web } = req.body;
  const userId = req.session.currentUser._id;

  await User.findById(userId)
    .then(() => {
      OwnCoins.create({ name, price, type, id, symbol, img, description, web })
        .then(owncoin => {
          _id = owncoin._id;

          // And add into the array of owncoins of the user
          User.findByIdAndUpdate(
            userId,
            { $push: { owncoins: _id } },
            { new: true }
          )
            .then(result => {
              res.json(result);
            })
            .catch(err => console.log(err));

          //   res.json(owncoin);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});



router.post("/remove/:_id", (req, res, next) => {
  const ObjectId = req.params._id;

  const userId = req.session.currentUser._id;

  User.findByIdAndUpdate(userId, { $pull: { owncoins: ObjectId } })
    .then(user => {
      res.json(user);
    })
    .catch(err => console.log(err));
});




router.get("/", (req, res, next) => {
  const userId = req.session.currentUser._id;

  User.findById(userId)
    // owncoins
    .populate("owncoins")
    .then(mycoins => {
      console.log(mycoins);
      res.json(mycoins);
    })
    .catch(err => console.log(err));
});

module.exports = router;

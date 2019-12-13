var express = require("express");
var router = express.Router();
const Favorites = require("../models/Favorites");
const User = require("../models/User");

router.post("/:_id", (req, res, next) => {
  const _id = req.params._id;

  const userId = req.session.currentUser._id;

  User.findByIdAndUpdate(
    { _id: userId },
    { $push: { favorites: { _id } } },
    { new: true }
  )
    .then(elem => {
      console.log(elem);
      res.status(200).json(elem);
    })
    .catch(err => console.log(err));
});

router.get("/", (req, res, next) => {
  console.log("Hola otra vez:", req.session.currentUser._id);

  const userId = req.session.currentUser._id;

  User.findById(userId)
    .populate("favorites")
    .then(favoritos => {
      console.log(favoritos);
      res.json(favoritos);
    })
    .catch(err => console.log(err));

  //   User.findById(userId, (err, user) => {
  //     Favorites.populate(user, { path: "favorites" }, (err, todosFavoritos) => {
  //       console.log("Que soy??:", todosFavoritos);
  //     });
  //   });

  // User.findById(userId)
  // .populate("Favorites")
  // .then( (user) => {
  //     Favorites.find()
  //     .then( (favorite) => {
  //         console.log(favorite);
  //     })
  //     .catch( (err) => console.log(err));
  //     console.log(allFavorites);
  //     // res.status(200).json(allFavorites.favorites);
  // })
  // .catch( (err) => console.log(err));
});

module.exports = router;

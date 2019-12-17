var express = require("express");
var router = express.Router();
var User = require("./../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

router.post("/", (req, res, next) => {
  console.log("Edit profile params in back: ", req.body);

  const { username, password, newpassword } = req.body;

  console.log({username}, {password}, {newpassword});
  

  // Find the user by username
  User.findOne({ username }).then(userData => {
    // If - username doesn't exist - return error
    if (!userData) {
      res.render("auth/login", { errorMessage: "Username not found!" });
      return;
    }

    // If username exists - check if the password is correct
    const hashedPasswordFromDB = userData.password; // Hashed password saved in DB during signup

    const passwordCorrect = bcrypt.compareSync(
        password,
      hashedPasswordFromDB
    );

    // If password is correct - create session (& cookie) and redirect

    if (passwordCorrect) {
      // Save the login in the session ( and create cookie )
      // And redirect the user

      // Should be de new Password from the form edit
      const password = newpassword;
      

      // > If username doesn't exist, generate salts and hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // > Create the user in the DB
      User.update({ username, password: hashedPassword })
        .then(newUserObj => {

          req.session.currentUser = userData;
          res.json(newUserObj);
          
        })
        .catch(err => {
          res.render("auth/signup", {
            errorMessage: "Error while creating new username."
          });
        });
    }
  });
});


module.exports = router;
var express = require("express");
var router = express.Router();
const Favorites = require("./../models/Favorites");
const User = require("../models/User");



router.post("/:_id", (req, res, next) => {

    console.log("Params" , req.params);
    
    const _id  = req.params._id;

    console.log("_id: ",_id);
    
    console.log("req user",req.session);
    
    

    // const userId = req.session.currentUser._id;


    // User.findByIdAndUpdate( {_id: userId} , {$put: { favorites: {_id} }})
    // .then( (elem) => {
    //     console.log(elem);
    //     res.status(200).send(elem)
    // })
    // .catch( (err) => console.log(err));

})

module.exports = router;
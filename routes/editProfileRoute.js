var express = require("express");
var router = express.Router();
var User = require("./../models/User");

router.post("/", (req, res, next) =>{

    console.log("Edit profile params in back: ", req.params);
    const {username, password, newpassword } = req.params;

    


})
var express = require("express");
var router = express.Router();
const History = require("../models/History");

router.post("/:symbol", (req, res, next) => {

    const {symbol} = req.params;

    console.log("Symbol en history", {symbol});
    
    History.find({symbol})
    .then( (historyCoin) => {
        console.log(historyCoin[0].value);
        res.status(200).json(historyCoin[0].value)
        // res.json(historyCoin.value);

    })
    .catch( (err) => console.log(err));
})


router.get("/", (req, res, next) => {

    History.find()
    .then( (historyCoin) => {
        
        res.status(200).json(historyCoin.slice(0, 20))
        // res.json(historyCoin.value);

    })
    .catch( (err) => console.log(err));
})




module.exports = router;
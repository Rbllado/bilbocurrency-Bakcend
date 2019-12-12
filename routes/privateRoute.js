var express = require("express");
var router = express.Router();
const Coins = require("./../models/Coins");
const History = require("./../models/History");
const OwnCoin = require("./../models/OwnCoin");

var axios = require('axios');

// localhots:5000:/private/addCoin
// It is going to create a new coin, with all this values and to keep into the history.
router.post("/addCoin", async (req, res, next) =>{

    const { name, tags, symbol, img, cmr_rank, description, web, price } = req.body;

    try {

        const existCoin = await History.find({name});
        if(existCoin){
            console.log("The coin is already here");
        }
        else{
            // Tambien tengo que crear la moneda en OwnCoin
            const putOwnCoin = await OwnCoin.create({ name, tags, symbol, img, cmr_rank, description, web, price });



            // Need to check if the value will be ok in that way
            // Has to be a push into array --> not now, but in a future when calling API.
            History.create({ symbol, value })
            .then( (newCoin) => {
                res
                .status(201)      // Created
                .json(newCoin);  
            })
            .catch( (err) => console.log(err));

        }
        
    } catch (error) {
        
    }

   
})
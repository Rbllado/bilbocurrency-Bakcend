var express = require("express");
var router = express.Router();
const Coins = require("./../models/Coins");
var axios = require('axios');


router.get("/:id", (req, res, next) =>{

    axios
    .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944`)
    .then(response => {

        // Should have the id from coin that I want to take the value

        const { id } = response.data.data;

        const { price } = response.data.data[{id}].quote.USD;
      
      res.status(201).json({price}); 
    })
      .catch(err => console.log(err));
})
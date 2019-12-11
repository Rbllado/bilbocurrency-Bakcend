var express = require("express");
var router = express.Router();
const Coins = require("./../models/Coins");
var axios = require('axios');
// const restaurants = require("./../models/RestaurantModel");

//





router.get("/", function(req, res, next) {
  console.log('heyyyy');
  
  axios
    .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944`)
    .then(response => {

      console.log("Que coño soy:", response.data.data[0]);
      console.log('Preciooooo', response.data.data[0].quote.USD.price);
      
      

      const { name, tags, symbol, img, cmr_rank, description, web  } = response.data.data[0];
      const {price} = response.data.data[0].quote.USD;
      // const { name, price, symbol, tags } = response.data.data[0];

      Coins.create( { name, price, tags, symbol, img, cmr_rank, symbol, description, web  } )
      .then(insertion => {
        console.log("He entrado en insertion??");
        
        res.status(201).json(insertion);
      });

      //res.send(response.data);
    })
    .catch(err => console.log(err));
  //We connect to the databse and find all the coins

});

module.exports = router;

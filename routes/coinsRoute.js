var express = require("express");
var router = express.Router();
const Coins = require("./../models/Coins");
var axios = require('axios');

 var stringNum ="";

//  To put all the id af mine database to call teh api
 for(let i = 0; i < 100; i++){
  Coins.find()
  .then( (listOfCoins) => {
          stringNum = stringNum +(listOfCoins[i].id)+ ",";
  })
  .catch( (err) => console.log(err));
 }


// This one is to take a the list of coins from 
router.get("/list", function(req, res, next) {
  console.log('heyyyy');
  
  stringNum = stringNum.split("").slice(0, stringNum.length-1).join("");
  console.log("String : ", stringNum);
  
  const promiseOne =  axios
    .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944`)
    
    .then(response => {
      
    //  // Create a copy from API to my DB
    //    for(let i=0; 1 < 100; i++){
    //      const { name, tags, symbol, img, cmr_rank, description, web, id  } = response.data.data[i];
    //      const {price} = response.data.data[i].quote.USD;
    //      // const { name, price, symbol, tags } = response.data.data[0];
         
    //      Coins.create( { name, price, tags, symbol, img, cmr_rank, symbol, description, web, id  } )
    //      .then(insertion => {
    //        console.log("He entrado en insertion", i , insertion);
    //      });

     // !!!Tambien tendre que hacer lo mismo para History Model!!!!!
      // }

      res.status(201).json(response.data); 
    })
    .catch( (err) => console.log(err));

    //This one is to call the api for img, web, description

  const promiseTwo = axios
  .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944&id=${stringNum}`)
  .then( (info) => {

    // convert all the id into array
    const arrId = stringNum = stringNum.split(",");

    arrId.forEach((id) => {

      // take the values to web, logo and description to add to our database.
      // id.toString() because in the Api is in String id

      const web = info.data.data[id.toString()].urls.website[0];
      const logo  = info.data.data[id.toString()].logo;
      const description = info.data.data[id.toString()].description;

      // Update the field web, img, description. If theses ones are not existing then it will create
      Coins.findOneAndUpdate({id: id}, { web: web , img: logo, description: description })
      .then( () => {
        console.log("database updated");
      })
      .catch( (err) => console.log(err));
    })

  })
  .catch( (err) => console.log(err));


  // We wait for all the promises finish.
  Promise.all([promiseOne, promiseTwo]);


});



//We connect to the databse and find all the coins from Model coins

router.get("/", function(req, res, next) {
  Coins.find()
  .then( (listOfCoins) => {
    
    res.status(200).json(listOfCoins);
  })
  .catch( (err) => console.log(err));
});

module.exports = router;

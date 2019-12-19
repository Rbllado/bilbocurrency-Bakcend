var express = require("express");
var router = express.Router();
const Coins = require("./../models/Coins");
const History = require("./../models/History");
var axios = require("axios");

var stringNum = "";

// To search into my DB already created
for (let i = 0; i < 100; i++) {
  Coins.find()
    .then(listOfCoins => {
      stringNum = stringNum + listOfCoins[i].id + ",";
    })
    .catch(err => console.log(err));
}

// This one is to take a the list of coins from
router.get("/createdbCoin", function(req, res, next) {
  // String id from the each coin to pass like a query
  stringNum = stringNum
    .split("")
    .slice(0, stringNum.length - 1)
    .join("");

  const promiseOne = axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944`
    )

    .then(response => {
      // // Create a copy from API to my DB
      //  for(let i=0; 1 < 100; i++){
      //    const { name, tags, symbol, img, cmr_rank, description, web, id  } = response.data.data[i];
      //    const {price} = response.data.data[i].quote.USD;

      //    Coins.create( { name, price, tags, symbol, img, cmr_rank, symbol, description, web, id  } )
      //    .then(insertion => {
      //      console.log("He entrado en insertion", i , insertion);
      //    });

      //      History.create({symbol , value: price })
      //      .then( (history) => console.log('hisotry created'))
      //      .catch( (err) => console.log(err));
      // }
      res.status(201).json(response.data);
    })
    .catch(err => console.log(err));

  //This one is to call the api for img, web, description
  const promiseTwo = axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=3e18416b-942d-419a-89ab-8f8058b12944&id=${stringNum}`
    )
    .then(info => {
      // convert all the id into array
      const arrId = (stringNum = stringNum.split(","));

      arrId.forEach(id => {
        // take the values to web, logo and description to add to our database.
        // id.toString() because in the Api is in String id

        const web = info.data.data[id.toString()].urls.website[0];
        const logo = info.data.data[id.toString()].logo;
        const description = info.data.data[id.toString()].description;

        // Update the field web, img, description. If theses ones are not existing then it will create
        Coins.findOneAndUpdate(
          { id: id },
          { web: web, img: logo, description: description }
        )
          .then(() => {
            console.log("database updated");
          })
          .catch(err => console.log(err));
      });
    })
    .catch(err => console.log(err));

  //We wait for all the promises finish.
  Promise.all([promiseOne, promiseTwo]);
});

// Para actualizar la base de datos de history
router.get("/updatehistory", (req, res, next) => {
  axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      { headers: { "X-CMC_PRO_API_KEY": process.env.KEY } }
    )
    .then(response => {
      // Here to go cross all the coins and update the value
      for (let i = 0; 1 < 100; i++) {
        // history we have array of values and symbol
        const price = response.data.data[i].quote.USD.price;
        const { symbol } = response.data.data[i];

        // Add to values
        History.findOneAndUpdate({ symbol }, { $push: { value: price } })
          .then(() => {
            console.log("History database updated");
            // all the history
            History.find()
              .then(history => {
                res.status(200).json(history);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

// detail of a coin

router.post("/detail/:_id", (req, res, next) => {
  console.log("Tiene que ser lo que llega", req.params);

  const { _id } = req.params;

  Coins.findById({ _id })
    .then(coin => {
      console.log(coin);
      res.send(coin);
    })
    .catch(err => console.log(err));
});

//We connect to the databse and find all the coins from Model coins

router.get("/", async function(req, res, next) {
  await axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      { headers: { "X-CMC_PRO_API_KEY": process.env.KEY } }
    )
    .then(response => {
      
        // Here to go cross all the coins and update the price
        const coins = response.data.data;
        const coinPromises = coins.map((coin, i) => {
        const price = coin.quote.USD.price;
        const { symbol } = coin;

        return Coins.findOneAndUpdate({ symbol }, { $set: { price } });
      });

      Promise.all(coinPromises)
      .then(listOfCoins => {
        res.status(200).json(listOfCoins);
      });

     
    })
    .catch(err => console.log(err));
});

module.exports = router;

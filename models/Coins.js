const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  id:{ type: Number, required: true },
  tags: [],
  // tags: { type: String, required: true },
  symbol: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  web: { type: String },
  history: [{type: Schema.Types.ObjectId , ref: "History"}],
  ownCoins: [{type: Schema.Types.ObjectId , ref: "OwnCoins"}]
});

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;

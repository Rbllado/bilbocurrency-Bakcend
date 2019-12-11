const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OwnCoinsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  symbol: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  web: { type: String },
  history: [{type: Schema.Types.ObjectId , ref: "History"}]
});

const OwnCoin = mongoose.model("OwnCoin", OwnCoinsSchema);

module.exports = OwnCoin; 
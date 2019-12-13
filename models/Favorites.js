const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
    listCoin: [],

})

const Favorites = mongoose.model("Favorite", FavoritesSchema);

module.exports = Favorites;
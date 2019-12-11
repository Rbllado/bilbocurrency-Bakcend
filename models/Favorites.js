const mongoose = require("mongoose");
const Schema = new Schema;

const FavoritesSchema = new Schema({
    listCoin: String
})

const Favorites = mongoose.model("Favorite", FavoritesSchema);

module.exports = Favorites;
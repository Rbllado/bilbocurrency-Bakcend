const mongoose = require("mongoose");
const Schema = new Schema;

const HistorySchema = new Schema({
    symbol:  {type: String, required: true}, 
    value: []
})

const History = mongoose.model("Favorite", HistorySchema);

module.exports = History;
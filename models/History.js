const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    symbol:  {type: String, required: true}, 
    value: []
})

const History = mongoose.model("History", HistorySchema);

module.exports = History;
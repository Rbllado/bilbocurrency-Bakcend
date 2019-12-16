const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  favorites: [{type: Schema.Types.ObjectId , ref: "Coin"}],
  owncoins: [{type: Schema.Types.ObjectId , ref: "OwnCoin"}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
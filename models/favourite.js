const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouriteSchema = new mongoose.Schema({
  fbUserId: { type: String, require: true },
  property: { type: Schema.Types.ObjectId, ref: 'Property', require: true }
});

const FavouriteModel = mongoose.model('Favourite', FavouriteSchema);

module.exports = FavouriteModel;

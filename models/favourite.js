const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
  fbUserId: { type: String, require: true },
  propertyId: { type: String, require: true }
});

const FavouriteModel = mongoose.model('Favourite', FavouriteSchema);

module.exports = FavouriteModel;

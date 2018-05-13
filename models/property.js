const mongoose = require('mongoose');

const PropertyListingSchema = new mongoose.Schema({
  title: { type: String, require: true },
  type: { type: String, require: true },
  bedrooms: { type: Number, require: true },
  bathrooms: { type: Number, require: true },
  price: { type: Number, require: true },
  city: { type: String, require: true }
});

const PropertyListingModel = mongoose.model('ProperyListing', PropertyListingSchema);

module.exports = PropertyListingModel;

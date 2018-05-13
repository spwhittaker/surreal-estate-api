const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const app = express();
const path = require('path');
const router = express.Router();
const expressListRoutes   = require('express-list-routes');
const PropertyListingModel = require('./models/property');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect(process.env.DATABASE_CONN);

restify.serve(router, PropertyListingModel);

app.use(router);

expressListRoutes({}, 'Endpoints:', router );

app.listen(3000, () => {
  console.log('Surreal Estate API is running on http://localhost:3000');
});
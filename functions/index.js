const functions = require('firebase-functions');
const express = require('express');
const offeringRoutes = require('./offeringRoutes.js');
const favoritesRoutes = require('./favoritesRoutes.js');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: true
}));

app.use('/api/offerings/', offeringRoutes);
app.use('/api/favorites/', favoritesRoutes);

exports.RESTEndpoints = functions.https.onRequest(app);
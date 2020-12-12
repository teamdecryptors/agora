const functions = require('firebase-functions');
const express = require('express');
const offeringRoutes = require('./offeringRoutes.js');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: true
}));

app.use('/api/offerings/', offeringRoutes);

exports.RESTEndpoints = functions.https.onRequest(app);
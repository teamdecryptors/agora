const express = require('express');
const db = require('./src/db_config');

const getFavorites = require('./model/getFavorites');
const postFavorites = require('./model/postFavorites');
const deleteFavorites = require('./model/deleteFavorites');

let router = express.Router();
const DEMO_ID = "TESTDEMOID"

router.get('/' , async (req, res) => {
    let favs = await getFavorites(DEMO_ID);
    res.json(favs);
})

router.post('/', (req, res) => {
    let exchange = req.body.exchange;
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    let action = req.body.action;
    if (exchange == null || crypto == null || currency == null || action == null) {
        res.send("invalid request");
        return;
    }

    postFavorites(DEMO_ID, exchange, crypto, currency, action);
    res.send("Post Complete");
})

router.delete('/', (req, res) => {
    let exchange = req.body.exchange;
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    let action = req.body.action;
    if (exchange == null || crypto == null || currency == null || action == null) {
        res.send("invalid request");
        return;
    }

    deleteFavorites(DEMO_ID, exchange, crypto, currency, action);
    res.send("Delete Complete");
})

module.exports = router;
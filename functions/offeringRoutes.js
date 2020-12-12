const express = require('express');
const getBudgetAsks = require('./model/getBudgetAsks');
const getPairAsks = require('./model/getPairAsks');
const getPairBids = require('./model/getPairBids');
const getBudgetBids = require('./model/getBudgetBids');
const db = require('./src/db_config');

let router = express.Router();

router.get("/asks/pair/:cryptoCurrency/:currency/:amount", async (req, res) => {
    let output = await getPairAsks(
        req.params.cryptoCurrency,
        req.params.currency,
        req.params.amount);
    res.json(output);
})

router.get("/bids/pair/:cryptoCurrency/:currency/:amount", async (req, res) => {
    let output = await getPairBids(
        req.params.cryptoCurrency,
        req.params.currency,
        req.params.amount);
    res.json(output);
})

router.get("/asks/budget/:currency/:amount", async (req, res) => {
    let output = await getBudgetAsks(
        req.params.currency,
        req.params.amount);
    res.json(output);
})

router.get("/bids/budget/:currency/:amount", async (req, res) => {
    let output = await getBudgetBids(
        req.params.currency,
        req.params.amount);
    res.json(output);
})

module.exports = router;
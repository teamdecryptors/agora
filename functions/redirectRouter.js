const express = require('express');
let router = express.Router();

router.get("/favorites", (req, res) => {
    res.redirect("https://agora.bid");
})

router.get("/education", (req, res) => {
    res.redirect("https://agora.bid");
})

router.get("/about", (req, res) => {
    res.redirect("https://agora.bid");
})


router.get("/contact", (req, res) => {
    res.redirect("https://agora.bid");
})

module.exports = router;
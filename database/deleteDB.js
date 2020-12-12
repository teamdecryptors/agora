const db = require("./db.js");

const dbref = db.database().ref("TRADES");

console.log("Deleting database...");

dbref.set({})

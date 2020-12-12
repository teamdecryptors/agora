const firebase = require('firebase-admin');
let firebaseApp = firebase.initializeApp();

var db = firebaseApp.database();
module.exports = db;
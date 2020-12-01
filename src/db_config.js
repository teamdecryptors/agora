var firebase = require('firebase');
var firebaseApp = firebase.initializeApp({
    // TODO: replace with your own Firebase config object
})

var db = firebaseApp.database();

module.exports = db; 
const firebase = require("firebase");

/*const db = firebase.initializeApp({
    apiKey: "AIzaSyAX14vtpXXgs3Nl3XR3o_ANAoN_r0GW8c0",
    authDomain: "agoradbtest.firebaseapp.com",
    databaseURL: "https://agoradbtest.firebaseio.com",
    projectId: "agoradbtest",
    storageBucket: "agoradbtest.appspot.com",
    messagingSenderId: "632535587209",
    appId: "1:632535587209:web:20c0b383299022d41f6958",
    measurementId: "G-SS09EBWP13"
});*/
const db = firebase.initializeApp({
	apiKey: "AIzaSyB-4QRn4XGp2EVTcRxrDX8hf0VQ9jiu-GQ",
	authDomain: "agora-36616.firebaseapp.com",
	databaseURL: "https://agora-36616.firebaseio.com",
	projectId: "agora-36616",
	storageBucket: "agora-36616.appspot.com",
	messagingSenderId: "390346518142",
	appId: "1:390346518142:web:68431d3a2b7aa01fd1722f",
	measurementId: "G-FMZJY39827"
});

module.exports = db;

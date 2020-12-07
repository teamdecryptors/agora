const firebase = require('firebase-admin');
const functions = require('firebase-functions');
const session = require('express-session');
const express = require('express');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const db = admin.initializeApp().database();

const app = express();

app.use(cors);
app.use(session(
    {
        secret: "FAEYRHASERFE", 
        resave: true,
        saveUninitialized: true,
        cookie: {
        maxAge: 24 * 3600 * 365 *100
    }
}));

const cryptoSigFigs = 5;
const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}


//relates to user searching how much they can buy of each crypto from different exchanges
//with respect to their current budget
app.get('/api/offerings/asks/budget/:currency/:amount', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //strating path for the database
    const databasePath = "TRADES/asks/" + req.params.currency;
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    //allows us to add smaller json objects to offerings array in output
    let output = JSON.parse(jsonOutput);
    //order children by price so we can compare with budget constraint
    db.ref(databasePath).on('value', (snapshot) => {
        let result = snapshot.val();
        db.ref("FAVORITES/" + req.session.id).on('value', (snapshot) => {
            let favorites = snapshot.val();
            //console.log(favorites);
            //for each exchange offered
            for(exchange in result) {                       
                
                //for each crypto offered in the exchange
                for(crypto in result[exchange]) {
                    let budget = req.params.amount;  
                    //console.log(budget); 
                    
                    const offerings = result[exchange][crypto];                               
                    let i = 0;
                    let amount = 0;
                    let price = 0;

                    while(budget > 0) {
                        if(offerings[i] == null ) { break; }
                        const offeringCost = parseFloat(offerings[i].price);
                        const offeringSize = parseFloat(offerings[i++].size);

                        //console.log(offeringCost + " X " + offeringSize);
                        
                        //if we need to take a fraction of the offering
                        //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
                        if(budget < (offeringCost*offeringSize)) {
                            let ratio = budget / offeringCost;
                            //console.log("ratio: " + ratio)
                            
                            amount += ratio;
                            price +=  budget;
                            budget = 0;

                        } else {
                            budget -= (offeringCost * offeringSize);
                            amount += offeringSize;
                            price += (offeringCost * offeringSize);
                        }
                    }

                    var fav = false;
                    if(favorites != null) {
                        let record = createFavoriteRecordName(exchange, crypto, req.params.currency, "ask");
                       
                        if(favorites[record] == null){
                            fav = false;
                        } else {
                            fav = true;
                        }
                    }
                    output['offerings'].push(
                        { 
                            "Exchange": exchange, 
                            "CryptoCurrency" : crypto,
                            "Amount": round(amount, cryptoSigFigs),
                            "Currency": req.params.currency,
                            "Price" : round(price, 2),
                            "Action": "Asks",
                            "isFavorited": fav
                        });
                }                     
            }
           res.json(output);
        })
    })
})

app.get('/api/offerings/bids/budget/:currency/:amount', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
    //strating path for the database
  const databasePath = "TRADES/bids/" + req.params.currency;
  //empty output json object
  let jsonOutput = `{"offerings": []}`;
  //allows us to add smaller json objects to offerings array in output
  let output = JSON.parse(jsonOutput);
  //order children by price so we can compare with budget constraint
  db.ref(databasePath).on('value', (snapshot) => {
        let result = snapshot.val();
        db.ref("FAVORITES/" + req.session.id).on('value', (snapshot) => {
          let favorites = snapshot.val();
          //for each exchange offered
          for(exchange in result) {                       
              
              //for each crypto offered in the exchange
              for(crypto in result[exchange]) {
                  let budget = req.params.amount;  
                  //console.log(budget); 
                  
                  const offerings = result[exchange][crypto];                               
                  let i = 0;
                  let amount = 0;
                  let price = 0;

                  while(budget > 0) {
                    if(offerings[i] == null ) { break; }
                    const offeringCost = parseFloat(offerings[i].price);
                      const offeringSize = parseFloat(offerings[i++].size);

                      //console.log(offeringCost + " X " + offeringSize);
                      
                      //if we need to take a fraction of the offering
                      //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
                      if(budget < (offeringCost*offeringSize)) {
                          let ratio = budget / offeringCost;                          
                          price += budget;
                          budget = 0;
                          amount += ratio;

                      } else {
                          budget -= (offeringCost * offeringSize);
                          amount += offeringSize;
                          price += (offeringCost * offeringSize);
                      }
                  }

                  //get the favorite report name
                  var fav = false;
                if(favorites != null) {
                    let record = createFavoriteRecordName(exchange, crypto, req.params.currency, "BID");
                   
                    if(favorites[record] == null){
                        fav = false;
                    } else {
                        fav = true;
                    }
                }

                  output['offerings'].push(
                      { 
                          "Exchange": exchange, 
                          "CryptoCurrency" : crypto,
                          "Amount": round(amount, cryptoSigFigs),
                          "Currency": req.params.currency,
                          "Price" : round(price, 2),
                          "Action": "Bid",
                          "isFavorited": fav
                      });
              }                
             
          }
         res.json(output);
    })
  })
})

app.get("/api/offerings/asks/pair/:cryptoCurrency/:currency/:amount", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //strating path for the database
    const databasePath = "TRADES/asks/" + req.params.currency;
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    //allows us to add smaller json objects to offerings array in output
    let output = JSON.parse(jsonOutput);

    //order children by price so we can compare with budget constraint
    db.ref(databasePath).on('value', (snapshot) => {
        let result = snapshot.val();
        db.ref("FAVORITES/" + req.session.id).on('value', (snapshot) => {
            let favorites = snapshot.val();
            
            //for each exchange offered
            for(exchange in result) {                       
                
                let amount = req.params.amount;  
                //console.log(budget); 
                
                const offerings = result[exchange][req.params.cryptoCurrency];  
                if(offerings == null) { continue; }                             
                let i = 0;
                let cost = 0;
                let purchasableAmount = 0;
                //console.log(offerings[0])
                while(amount > 0) {
                    let offering = offerings[i++]; 
                    if(offering == null ) { break; }                   
                    const offeringCost = parseFloat(offering.price);
                    const offeringSize = parseFloat(offering.size);
  
                    //console.log(offeringCost + " X " + offeringSize);
                    
                    //if we need to take a fraction of the offering
                    //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
                    if(amount < offeringSize) {
                        cost += offeringCost * amount;
                        purchasableAmount += amount;
                        amount = 0;                         
                    } else {
                        amount -= offeringSize;
                        cost += offeringCost*offeringSize;
                        purchasableAmount += offeringSize;
                    }
                } 
                
                //get the favorite report name
                var fav = false;
                if(favorites != null) {
                    let record = createFavoriteRecordName(exchange, crypto, req.params.currency, "ask");
                   
                    if(favorites[record] == null){
                        fav = false;
                    } else {
                        fav = true;
                    }
                }
                
                output['offerings'].push(
                    { 
                        "Exchange": exchange, 
                        "CryptoCurrency" : req.params.cryptoCurrency,
                        "Amount": round(purchasableAmount, cryptoSigFigs),
                        "Currency": req.params.currency,
                        "Price" : round(cost, 2),
                        "Action": "Asks",
                        "isFavorited": fav
                    });         
               
            }
           res.json(output);
        })
    })
})

app.get('/api/offerings/bids/pair/:cryptoCurrency/:currency/:amount', (req, res) => {
    let databasePath = "TRADES/bids/" + req.params.currency;
    res.set('Access-Control-Allow-Origin', '*');
    let jsonOutput = `{"offerings": []}`;
    //allows us to add smaller json objects to offerings array in output
    let output = JSON.parse(jsonOutput);
    //order children by price so we can compare with budget constraint
    db.ref(databasePath).on('value', (snapshot) => {
        let result = snapshot.val();
        db.ref("FAVORITES/" + req.session.id).on('value', (snapshot) => {
            let favorites = snapshot.val();
          
            //for each exchange offered
            for(exchange in result) {                       
                
                let amount = req.params.amount;  
                //console.log(budget); 
                
                const offerings = result[exchange][req.params.cryptoCurrency]; 
                if(offerings == null) { continue; }                               
                let i = 0;
                let cost = 0;
                let purchasableAmount = 0;
                while(amount > 0) {
                    let offering = offerings[i++];  
                    if(offering == null ) { break; }                  
                    const offeringCost = parseFloat(offering.price);
                    const offeringSize = parseFloat(offering.size);
  
                    //console.log(offeringCost + " X " + offeringSize);
                    
                    //if we need to take a fraction of the offering
                    //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
                    if(amount < offeringSize) {
                        cost += offeringCost * amount;
                        purchasableAmount += amount;
                        amount = 0;                         
                    } else {
                        amount -= offeringSize;
                        cost += offeringCost*offeringSize;
                        purchasableAmount += offeringSize;
                    }
                } 

                var fav = false;
                if(favorites != null) {
                    let record = createFavoriteRecordName(exchange, crypto, req.params.currency, "BID");
                   
                    if(favorites[record] == null){
                        fav = false;
                    } else {
                        fav = true;
                    }
                }
  
                output['offerings'].push(
                    { 
                        "Exchange": exchange, 
                        "CryptoCurrency" : req.params.cryptoCurrency,
                        "Amount": round(purchasableAmount, cryptoSigFigs),
                        "Currency": req.params.currency,
                        "Price" : round(cost, 2),
                        "Action": "Bid",
                        "isFavorited": fav
                    });         
               
            }
            res.json(output);
        })
    })
})

app.get("/api/offerings/asks/marketDepth/:currency/:exchange/:cryptoCurrency/:amount", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    //strating path for the database
    const databasePath = "TRADES/asks/" + req.params.currency;
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    //allows us to add smaller json objects to offerings array in output
    let output = JSON.parse(jsonOutput);
    //order children by price so we can compare with budget constraint
    db.ref(databasePath).on('value', (snapshot) => {
            let result = snapshot.val();
           
            let amount = req.params.amount;  
            //console.log(budget); 

            const offerings = result[req.params.exchange][req.params.cryptoCurrency];                               
            let i = 0;
            let cost = 0;
            let purchasableAmount = 0;
            //console.log(offerings[0])
            while(amount > 0) {
                let offering = offerings[i]; 
                if(offering == null ) { break; }                   
                const offeringCost = parseFloat(offering.price);
                const offeringSize = parseFloat(offering.size);

                //console.log(offeringCost + " X " + offeringSize);

                //if we need to take a fraction of the offering
                //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
                if(amount < offeringSize) {
                    cost += offeringCost * amount;
                    purchasableAmount += amount;
                    amount = 0;                         
                } else {
                    amount -= offeringSize;
                    cost += offeringCost*offeringSize;
                    purchasableAmount += offeringSize;
                }
                
                i++;
            } 

            output['offerings'].push(
                { 
                    "Exchange": exchange, 
                    "CryptoCurrency" : req.params.cryptoCurrency,
                    "Amount": round(purchasableAmount, cryptoSigFigs),
                    "Currency": req.params.currency,
                    "Price" : round(cost, 2),
                    "Action": "Asks"
                });         
               
           res.json(output);
    })
})

app.get("/api/offerings/asks/marketDepth/:currency/:exchange/:cryptoCurrency", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const databasePath = "TRADES/asks/" + req.params.currency + "/" + req.params.exchange + "/" + req.params.cryptoCurrency;
    db.ref(databasePath).on('value', (snapshot) => {
        res.json(snapshot.val());
    })
})

app.get("/api/favorites", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let sessionID = "Fdg0pUXJ5NxbaA1aKmIZOJ-TZyQMYpF-";
    db.ref("FAVORITES/" + sessionID).on('value', (snapshot) => {
        res.json(snapshot.val());
    })
})

app.post("/api/favorites", (req, res) => {  
    res.set('Access-Control-Allow-Origin', '*'); 
    res.set('Access-Control-Allow-Headers', "GET,POST,PUT,DELETE,OPTIONS");
    let uid = req.session.id;
    console.log(req.body.exchange);
    let exchange = req.body.exchange;
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    let action = req.body.action;
    if(exchange == null || crypto == null || currency == null || action == null) {
        res.send("invalid request");
        return;
    }
    let recordName = createFavoriteRecordName(exchange, crypto, currency, action);
    db.ref('FAVORITES/' + uid + "/" + recordName).set({
        "exchange": exchange,
        "crypto": crypto,
        "currency": currency,
        "action": action
    })
    res.send("favorites updated");
})



app.delete('/api/favorites', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', "GET,POST,PUT,DELETE,OPTIONS");
    let uid = req.session.id;
    let exchange = req.body.exchange;
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    let action = req.body.action;
    if(exchange == null || crypto == null || currency == null || action == null) {
        res.send("invalid request");
        return;
    }

    let recordName = createFavoriteRecordName(exchange, crypto, currency, action);
    console.log(recordName);
    db.ref('FAVORITES/' + uid + "/" + recordName).remove();
    res.send("Succesful deletion");
})

function createFavoriteRecordName(ex, cry, curr, act) {
    let name = ex + cry + curr + act;
    return name.toUpperCase();
}


exports.RESTEndpoints = functions.https.onRequest(app);

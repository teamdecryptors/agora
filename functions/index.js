const firebase = require('firebase-admin');
const functions = require('firebase-functions');

const express = require('express');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const db = admin.initializeApp().database();

const app = express();

const cryptoSigFigs = 5;
const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}

// These are demo endpints not for final release
app.get('/api/offerings' , (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.ref("TRADES/").on('value' , (snapshot) => {
        res.json(snapshot.val());
    });
});

app.get('/api/offerings/bids' , (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.ref("TRADES/bids").on('value' , (snapshot) => {
        res.json(snapshot.val());
    });
});

app.get('/api/offerings/asks' , (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    db.ref("TRADES/asks").on('value' , (snapshot) => {
        res.json(snapshot.val());
    });
});

app.get('/api/offerings/asks/:currency', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let databasePath = "TRADES/asks/" + req.params.currency;
    db.ref(databasePath).on('value', (snapshot) => {
       res.json(snapshot.val());
    })
})

app.get('/api/offerings/bids/:currency', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    let databasePath = "TRADES/bids/" + req.params.currency;
    db.ref(databasePath).on('value', (snapshot) => {
       res.json(snapshot.val());
    })
})
//end of demo endpoints


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

                    output['offerings'].push(
                        { 
                            "Exchange": exchange, 
                            "CryptoCurrency" : crypto,
                            "Amount": round(amount, cryptoSigFigs),
                            "Currency": req.params.currency,
                            "Price" : round(price, 2),
                            "Action": "Asks"
                        });
                }                
               
            }
           res.json(output);

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

                  output['offerings'].push(
                      { 
                          "Exchange": exchange, 
                          "CryptoCurrency" : crypto,
                          "Amount": round(amount, cryptoSigFigs),
                          "Currency": req.params.currency,
                          "Price" : round(price, 2),
                          "Action": "Bid"
                      });
              }                
             
          }
         res.json(output);

  })
})

app.get("/api/offerings/asks/pair/:cryptoCurrency/:currency/:amount", (req, res) => {
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
            
            //for each exchange offered
            for(exchange in result) {                       
                
                let amount = req.params.amount;  
                //console.log(budget); 
                
                const offerings = result[exchange][req.params.cryptoCurrency];  
                if(offerings == null) { break; }                             
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
  
                output['offerings'].push(
                    { 
                        "Exchange": exchange, 
                        "CryptoCurrency" : req.params.cryptoCurrency,
                        "Amount": round(purchasableAmount, cryptoSigFigs),
                        "Currency": req.params.currency,
                        "Price" : round(cost, 2),
                        "Action": "Asks"
                    });         
               
            }
           res.json(output);
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
          
            //for each exchange offered
            for(exchange in result) {                       
                
                let amount = req.params.amount;  
                //console.log(budget); 
                
                const offerings = result[exchange][req.params.cryptoCurrency]; 
                if(offerings == null) { break; }                               
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
  
                output['offerings'].push(
                    { 
                        "Exchange": exchange, 
                        "CryptoCurrency" : req.params.cryptoCurrency,
                        "Amount": round(purchasableAmount, cryptoSigFigs),
                        "Currency": req.params.currency,
                        "Price" : round(cost, 2),
                        "Action": "Bid"
                    });         
               
            }
            res.json(output);
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


exports.RESTEndpoints = functions.https.onRequest(app);

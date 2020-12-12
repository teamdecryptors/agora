const admin = require('firebase-admin');
const initApp = admin.initializeApp();
const db = initApp.database();

module.exports = function budgetMarketDepth(res, req) {
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
        while (amount > 0) {
            let offering = offerings[i];
            if (offering == null) { break; }
            const offeringCost = parseFloat(offering.price);
            const offeringSize = parseFloat(offering.size);

            //console.log(offeringCost + " X " + offeringSize);
            //if we need to take a fraction of the offering
            //console.log("Cost for " + exchange + " at " + crypto + ":" + (offeringCost*offeringSize));
            if (amount < offeringSize) {
                cost += offeringCost * amount;
                purchasableAmount += amount;
                amount = 0;
            } else {
                amount -= offeringSize;
                cost += offeringCost * offeringSize;
                purchasableAmount += offeringSize;
            }

            i++;
        }

        output['offerings'].push(
            {
                "Exchange": exchange,
                "CryptoCurrency": req.params.cryptoCurrency,
                "Amount": round(purchasableAmount, cryptoSigFigs),
                "Currency": req.params.currency,
                "Price": round(cost, 2),
                "Action": "asks"
            });

        res.json(output);
    });
}


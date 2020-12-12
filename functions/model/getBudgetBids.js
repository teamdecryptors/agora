const db = require("../src/db_config");
const round = require('../src/round');

const databasePath = "TRADES/asks/";

module.exports = async function getPairAsks(currency, amount) {
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    let output = JSON.parse(jsonOutput);

    let result = await db.ref(databasePath + currency).once('value');
    let offers = result.val()
    for(exchange in offers) {        
       for(crypto in offers[exchange]) {
            let remainingBudget = amount;
            let cryPurchased = 0;
            let currSpent = 0;
            
            const offeringDepth = offers[exchange][crypto];

             for(offer in offeringDepth) {
                const unitCost = parseFloat(offeringDepth[offer].price);
                const offeringSize = parseFloat(offeringDepth[offer].size);
                const totalCost = (unitCost*offeringSize)
                if(remainingBudget < totalCost) {
                    cryPurchased += remainingBudget / unitCost;
                    currSpent += remainingBudget;
                    break;
                }
                else {
                    remainingBudget -= totalCost;
                    cryPurchased += offeringSize;
                    currSpent += totalCost;
                }
            }

            output['offerings'].push( { 
                "Exchange": exchange, 
                "CryptoCurrency" : crypto,
                "Amount": round(cryPurchased, 5),
                "Currency": currency,
                "Price" : round(currSpent, 2),
                "Action": "asks",
                "isFavorited": false //TODO: reimplement favorites
            });
        }
        
    }

    return output;
    
}

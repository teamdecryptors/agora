const db = require("../src/db_config");
const round = require('../src/round');
const getFavorites = require("./getFavorites");

const databasePath = "TRADES/asks/";
const DEMO_ID = "TESTDEMOID";

module.exports = async function getPairAsks(currency, amount) {
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    let output = JSON.parse(jsonOutput);

    let result = await db.ref(databasePath + currency).once('value');
    let favorites = await getFavorites(DEMO_ID);
    let offers = result.val();

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
            let fav = false;
            for(favorite in favorites) {
                console.log(favorites[favorite])
                console.log(crypto);
                console.log(exchange);
                if(favorites[favorite].crypto == crypto &&
                    favorites[favorite].exchange == exchange &&
                    favorites[favorite].currency == currency &&
                    favorites[favorite].action == "ask") {
                        fav = true;
                    }
            }

            output['offerings'].push( { 
                "Exchange": exchange, 
                "CryptoCurrency" : crypto,
                "Amount": round(cryPurchased, 5),
                "Currency": currency,
                "Price" : round(currSpent, 2),
                "Action": "asks",
                "isFavorited": fav 
            });
        }
        
    }

    return output;
    
}

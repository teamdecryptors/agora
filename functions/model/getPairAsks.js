const db = require("../src/db_config");
const round = require('../src/round');
const getFavorites = require("./getFavorites");
const tradesBasePath = require("../src/tradesBasePath");

const DEMO_ID = "TESTDEMOID";

module.exports = async function getPairAsks(cryptoCurrency, currency, amount) {
    //empty output json object
    let jsonOutput = `{"offerings": []}`;
    let output = JSON.parse(jsonOutput);

    
    let databasePath = tradesBasePath() + "/asks/";

    let result = await db.ref(databasePath + currency).once('value');
    let favorites = await getFavorites(DEMO_ID);

    let offers = result.val()
    for(exchange in offers) {        
       
        let remainingBudget = amount;
        let cryPurchased = 0;
        let currSpent = 0;
        const offeringDepth = offers[exchange][cryptoCurrency];

         for(offer in offeringDepth) {
            const unitCost = parseFloat(offeringDepth[offer].price);
            const offeringSize = parseFloat(offeringDepth[offer].size);
            const totalCost = (unitCost*offeringSize)
            if(remainingBudget < offeringSize) {
                cryPurchased += remainingBudget;
                currSpent += remainingBudget * unitCost;
                break;
            }
            else {
                remainingBudget -= offeringSize;
                cryPurchased += offeringSize;
                currSpent += totalCost;
            }
        }

        let fav = false;
            for(favorite in favorites) {
                if(favorites[favorite].crypto == cryptoCurrency &&
                    favorites[favorite].exchange == exchange &&
                    favorites[favorite].currency == currency &&
                    favorites[favorite].action == "asks") {
                        fav = true;
                    }
            }

        output['offerings'].push( { 
            "Exchange": exchange, 
            "CryptoCurrency" : cryptoCurrency,
            "Amount": round(cryPurchased, 5),
            "Currency": currency,
            "Price" : round(currSpent, 2),
            "Action": "asks",
            "isFavorited": fav
        });
        
    }

    return output;
    
}

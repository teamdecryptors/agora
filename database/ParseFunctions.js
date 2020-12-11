/*
 * This file is for test code for parsing a given JSON object of bids and asks
 * data from an exchange API
 *
 */
 //import selfParser from "./ParseFunctions";

class ParseFunctions {
    static parseIndexedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName){
        if(bidsArray == undefined || asksArray == undefined){
            return {};
        }

        // initialize arrays of parsed data (bids/asks)
        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        // Go ahead and parse the bids data
        for (let i = 0; i < bidsArray.length; i++){
            const price = parseFloat(bidsArray[i][0]);
            const size = parseFloat(bidsArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size
                };

            arrayOfParsedBids.push(newTradeObject);
        }

        // Go ahead and parse the asks data
        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i][0]);
            const size = parseFloat(asksArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        // Return a dict of the data divided into two key-pairs of bids: and
        // asks:
        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseKRAKEN(unparsedObject, baseCurrency, quoteCurrency, exchangeName) {
        if(unparsedObject == undefined){
            return {};
        }

        // Get the bids/asks part of the object to parse
        let intermediateKey = Object.keys(unparsedObject.result)[0];
        const bidsArray = unparsedObject.result[intermediateKey].bids;
        intermediateKey = Object.keys(unparsedObject.result);
        const asksArray = unparsedObject.result[intermediateKey].asks;

        const parsed = ParseFunctions.parseIndexedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseNamedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName){
        if(bidsArray == undefined || asksArray == undefined){
            return {};
        }

        // initialize arrays of parsed data (bids/asks)
        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        // Go ahead and parse the bids data
        for (let i = 0; i < bidsArray.length; i++){
            const price = parseFloat(bidsArray[i].price);
            const size = parseFloat(bidsArray[i].size);

            const newTradeObject =
                {
                    price: price,
                    size: size
                };

            arrayOfParsedBids.push(newTradeObject);
        }

        // Go ahead and parse the asks data
        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i].price);
            const size = parseFloat(asksArray[i].size);

            const newTradeObject =
                {
                    price: price,
                    size: size
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        // Return a dict of the data divided into two key-pairs of bids: and
        // asks:
        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseBITFLYER(unparsedObject, baseCurrency, quoteCurrency, exchangeName) {
        if(unparsedObject == undefined){
            return {};
        }

        const bidsArray = unparsedObject.bids;
        const asksArray = unparsedObject.asks;

        const parsed = ParseFunctions.parseNamedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseBITHUMB(unparsedObject, baseCurrency, quoteCurrency, exchangeName){
        if(unparsedObject == undefined || unparsedObject == null){
            return {};
        }

        if(unparsedObject.data == null){
            return {};
        }

        const bidsArray = unparsedObject.data.b;
        const asksArray = unparsedObject.data.s;

        const parsed = ParseFunctions.parseIndexedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseBITBAY(unparsedObject, baseCurrency, quoteCurrency, exchangeName){
        if(unparsedObject == undefined){
            return {};
        }

        const bidsArray = unparsedObject.bids;
        const asksArray = unparsedObject.asks;

        const parsed = ParseFunctions. parseIndexedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseCROSSTOWER(unparsedObject, baseCurrency, quoteCurrency, exchangeName){
        if(unparsedObject == undefined){
            return {};
        }

        const bidsArray = unparsedObject.bid;
        const asksArray = unparsedObject.ask;

        const parsed = ParseFunctions.parseNamedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseHITBTC(unparsedObject, baseCurrency, quoteCurrency, exchangeName){
        if(unparsedObject == undefined){
            return {};
        }

        const bidsArray = unparsedObject.bid;
        const asksArray = unparsedObject.ask;

        const parsed = ParseFunctions.parseNamedArrays(bidsArray, asksArray, baseCurrency, quoteCurrency, exchangeName);
        return parsed;
    }

    static parseBittrex(unparsedObject) {
        const bidsArray = unparsedObject["bid"];
        const asksArray = unparsedObject["ask"];

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i].rate);
            const size = parseFloat(bidsArray[i].quantity);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i].rate);
            const size = parseFloat(asksArray[i].quantity);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseLiquid(unparsedObject) {
        const bidsArray = unparsedObject["buy_price_levels"];
        const asksArray = unparsedObject["sell_price_levels"];

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i][0]);
            const size = parseFloat(bidsArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i][0]);
            const size = parseFloat(asksArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseBitstamp(unparsedObject) {

        const bidsArray = unparsedObject["bids"].slice(0,300);
        const asksArray = unparsedObject["asks"].slice(0,300);

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i][0]);
            const size = parseFloat(bidsArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i][0]);
            const size = parseFloat(asksArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseFTX(unparsedObject) {

        const bidsArray = unparsedObject["result"]["bids"];
        const asksArray = unparsedObject["result"]["asks"];

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = bidsArray[i][0];
            const size = bidsArray[i][1];

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = asksArray[i][0];
            const size = asksArray[i][1];

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseGemini(unparsedObject) {

        const bidsArray = unparsedObject["bids"];
        const asksArray = unparsedObject["asks"];

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i].price);
            const size = parseFloat(bidsArray[i].amount);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i].price);
            const size = parseFloat(asksArray[i].amount);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseGate_io(unparsedObject) {

        const bidsArray = unparsedObject["bids"];
        const asksArray = unparsedObject["asks"];

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i][0]);
            const size = parseFloat(bidsArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i][0]);
            const size = parseFloat(asksArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseBitfinex(unparsedObject) {
        const bidsArray = unparsedObject.slice(0, unparsedObject.length/2);
        const asksArray = unparsedObject.slice(unparsedObject.length/2,unparsedObject.length);

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {

            const price = bidsArray[i][0];
            const size = bidsArray[i][2];

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };


            arrayOfParsedBids.push(newTradeObject);
        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = asksArray[i][0];
            const size = Math.abs(asksArray[i][2]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };


            arrayOfParsedAsks.push(newTradeObject);
        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }

    static parseCoinbase(unparsedObject) {

        const bidsArray = unparsedObject["bids"].slice(0,300);
        const asksArray = unparsedObject["asks"].slice(0,300);

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = bidsArray[i][0];
            const size = bidsArray[i][1];

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = asksArray[i][0];
            const size = asksArray[i][1];

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }


    static parseBit_Z(unparsedObject) {
        const bidsArray = unparsedObject["data"]["bids"];
        let tempAsksArray = unparsedObject["data"]["asks"];
        const asksArray = tempAsksArray.reverse();

        let arrayOfParsedBids = [];
        let arrayOfParsedAsks = [];

        for (let i = 0; i < bidsArray.length; i++) {
            const price = parseFloat(bidsArray[i][0]);
            const size = parseFloat(bidsArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedBids.push(newTradeObject);

        }

        for (let i = 0; i < asksArray.length; i++) {
            const price = parseFloat(asksArray[i][0]);
            const size = parseFloat(asksArray[i][1]);

            const newTradeObject =
                {
                    price: price,
                    size: size,
                };

            arrayOfParsedAsks.push(newTradeObject);

        }

        return {
            bids: arrayOfParsedBids,
            asks: arrayOfParsedAsks
        };
    }
}

module.exports = {
  ParseFunctions: ParseFunctions
}

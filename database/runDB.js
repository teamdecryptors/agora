const fetch = require("node-fetch");
const db = require("./db.js");
const updateDBTimestamp = require("./updateDBTimestamp.js");
const paramsFormatter = require("./ParamsFormatter.js").paramsFormatter;
const ParseFunctions = require("./ParseFunctions.js").ParseFunctions;
const pushToDB = require("./pushToDB.js");
const EXCHANGEINFOS = require("./ExchangeInfos.js");


const CORSHELPERURL = "https://cors-anywhere.herokuapp.com";
const WAITTIME = 300;
const WAITTIME2 = 10000;

const firstFirebase = true;
let firebaseRef = db.database().ref("TRADES");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function jGeneralFetchFromAPI (exchange, formatterFunction, parserFunction, baseBound, quoteBound) {

  const exchangeName = exchange.name;
  for (let j = 0; j < exchange.quote_currencies.length && j < quoteBound; j++) {
    const quoteCurrency = exchange.quote_currencies[j];

    for (let i = 0; i < exchange.base_currencies.length && i < baseBound; i++) {
      const baseCurrency = exchange.base_currencies[i];
      const pathParams = formatterFunction(baseCurrency, quoteCurrency);
      let queryURL = exchange.api_url + pathParams;

      //console.log(queryURL);
      fetch(queryURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(function(result) {
        //console.log(result);
        if (result != undefined && Object.keys(result).length > 0 && result.message !== "NotFound" &&
            result.message !== "Public rate limit exceeded") {
            //console.log("It got a result");
            const parsedObjects = parserFunction(result, baseCurrency, quoteCurrency, exchangeName);
            const parsedBidsArray = parsedObjects.bids;
            const parsedAsksArray = parsedObjects.asks;


            if (parsedObjects != undefined &&
                Object.keys(parsedObjects).length > 0 &&
                (parsedObjects.bids.length > 0 ||
                parsedObjects.asks.length > 0)) {
                //console.log(JSON.stringify(parsedObjects));

                pushToDB(firebaseRef, parsedBidsArray,"bids",exchangeName, baseCurrency, quoteCurrency);
                pushToDB(firebaseRef, parsedAsksArray,"asks",exchangeName, baseCurrency, quoteCurrency);
                //console.log(exchangeName);
            } else{
                //console.log(parsedObjects);
            }
        }

      }).catch(err => console.error(err));

      await sleep(WAITTIME)
    }
  }
}


async function dGeneralFetchFromAPI (exchange, formatterFunction, parserFunction, baseBound, quoteBound) {

  const exchangeName = exchange.name;
  for (let j = 0; j < exchange.quote_currencies.length && j < quoteBound; j++) {
    const quoteCurrency = exchange.quote_currencies[j];

    for (let i = 0; i < exchange.base_currencies.length && i < baseBound; i++) {
      const baseCurrency = exchange.base_currencies[i];
      const pathParams = formatterFunction(baseCurrency, quoteCurrency);
      let queryURL = exchange.api_url + pathParams;
      if (exchange===EXCHANGEINFOS.POLONIEX) {
          queryURL = exchange.api_url + pathParams;
      }

      //console.log(queryURL);
      fetch(queryURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(function(result) {

        //console.log(result);

        const isError = result == undefined ||
            Object.keys(result).length == 0 || // coinbase, bitstamp, poloniex
            result.message === "NotFound" ||            // coinbase
            result.message === "Public rate limit exceeded" ||  // coinbase
            result[0] === "error" ||
            result.hasOwnProperty('error') || //
            result.label === "INVALID_CURRENCY_PAIR" || // Gate_io
            result.result === "error" ||               // gemini
            result.hasOwnProperty('error_code')  ||   // okcoin
            result.hasOwnProperty('code')        || // binance, bittrex
            result.success === false                 // FTX
        ;

        if (!isError) {
            let parsedObjects = parserFunction(result);
            let parsedBidsArray = parsedObjects.bids;
            let parsedAsksArray = parsedObjects.asks;

            //console.log(parsedBidsArray);

            pushToDB(firebaseRef, parsedBidsArray,"bids",exchangeName, baseCurrency, quoteCurrency);
            pushToDB(firebaseRef, parsedAsksArray,"asks",exchangeName, baseCurrency, quoteCurrency);
            //console.log(exchangeName);
        }

      }).catch(err => console.error(err));

      await sleep(WAITTIME)
    }
  }
}


async function dSpecialFetchFromLiquid(idbound) {
    const exchange = EXCHANGEINFOS.LIQUID;
    for (let i = 0; i < exchange.IDs.length && i < idbound;i++) {
        const {id, base, quote} = exchange.IDs[i];

        const queryURL = exchange.api_url + "products/" + id + "/price_levels";

        fetch(queryURL, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(function(result) {
            //console.log(JSON.stringify(result));

            const parsedObjects = ParseFunctions.parseLiquid(result);
            let parsedBidsArray = parsedObjects.bids;
            let parsedAsksArray = parsedObjects.asks;
            //console.log(JSON.stringify(parsedObjects));
            pushToDB(firebaseRef, parsedBidsArray,"bids", exchange.name, base, quote);
            pushToDB(firebaseRef, parsedAsksArray,"asks",exchange.name, base, quote);
        }).catch(err => console.error(err));

        await sleep(WAITTIME)
    }
}

async function APIController() {



  dGeneralFetchFromAPI(EXCHANGEINFOS.FTX, paramsFormatter.formatFTX, ParseFunctions.parseFTX, 20, 20);

  dGeneralFetchFromAPI(EXCHANGEINFOS.GEMINI, paramsFormatter.formatGemini, ParseFunctions.parseGemini, 20, 20);
    await sleep(WAITTIME2);
  dGeneralFetchFromAPI(EXCHANGEINFOS.BITFINEX, paramsFormatter.formatBitfinex, ParseFunctions.parseBitfinex,20,20);
  dGeneralFetchFromAPI(EXCHANGEINFOS.GATE_IO, paramsFormatter.formatGate_io, ParseFunctions.parseGate_io, 20, 20);
    await sleep(WAITTIME2);
  dGeneralFetchFromAPI(EXCHANGEINFOS.BINANCE, paramsFormatter.formatBinance, ParseFunctions.parseGate_io, 20, 20);
  dGeneralFetchFromAPI(EXCHANGEINFOS.COINBASE, paramsFormatter.formatCoinbase, ParseFunctions.parseCoinbase,20,20);
    await sleep(WAITTIME2);
  dGeneralFetchFromAPI(EXCHANGEINFOS.CEX_IO, paramsFormatter.formatCex_io, ParseFunctions.parseCoinbase, 20, 20);
  dGeneralFetchFromAPI(EXCHANGEINFOS.OKCOIN, paramsFormatter.formatOKCoin, ParseFunctions.parseGate_io, 20, 20);

  await sleep(WAITTIME2);

  dGeneralFetchFromAPI(EXCHANGEINFOS.BITSTAMP, paramsFormatter.formatBitstamp, ParseFunctions.parseBitstamp, 20, 20);
  dGeneralFetchFromAPI(EXCHANGEINFOS.POLONIEX, paramsFormatter.formatPoloniex, ParseFunctions.parseGate_io, 20, 20);
    await sleep(WAITTIME2);
  dGeneralFetchFromAPI(EXCHANGEINFOS.BITTREX, paramsFormatter.formatBittrex, ParseFunctions.parseBittrex, 20, 20);
  dGeneralFetchFromAPI(EXCHANGEINFOS.BITZ, paramsFormatter.formatBIT_Z, ParseFunctions.parseBit_Z, 20, 20)
  dSpecialFetchFromLiquid(20);
    await sleep(WAITTIME2);


  jGeneralFetchFromAPI(EXCHANGEINFOS.KRAKEN, paramsFormatter.formatKRAKEN, ParseFunctions.parseKRAKEN, 20, 20);
  jGeneralFetchFromAPI(EXCHANGEINFOS.HITBTC, paramsFormatter.formatHITBTC, ParseFunctions.parseHITBTC, 20, 20);
    await sleep(WAITTIME2);
  jGeneralFetchFromAPI(EXCHANGEINFOS.CROSSTOWER, paramsFormatter.formatCROSSTOWER, ParseFunctions.parseCROSSTOWER, 20, 20);
  jGeneralFetchFromAPI(EXCHANGEINFOS.BITFLYER, paramsFormatter.formatBITFLYER, ParseFunctions.parseBITFLYER, 20, 20);
    await sleep(WAITTIME2);
  jGeneralFetchFromAPI(EXCHANGEINFOS.BITHUMB, paramsFormatter.formatBITHUMB, ParseFunctions.parseBITHUMB, 20, 20);
  jGeneralFetchFromAPI(EXCHANGEINFOS.BITBAY, paramsFormatter.formatBITBAY, ParseFunctions.parseBITBAY, 20, 20);

}

function pullFromAPI() {
    console.log("DBController running");
    APIController();
}

function updateIfOclock(){
    var now = new Date();
    if(now.getUTCMinutes() == 0){
        console.log("Wake up database, it's feeding time. " + now.getUTCHours());
        if(now.getUTCHours() % 2 == 0){
            console.log("Even hour. Use backup database Trades1");
            firebaseRef = db.database().ref("TRADES");
        }else{
            console.log("Odd hour. Use backup database Trades");
            firebaseRef = db.database().ref("TRADES1");
        }
        pullFromAPI();
    }else{
        console.log("Sleep tight database. Time = " + now.getUTCHours() + ":" + now.getUTCMinutes());
    }
}

console.log("Timer database running");
setInterval(updateIfOclock, 60000);

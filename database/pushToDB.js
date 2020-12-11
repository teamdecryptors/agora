module.exports = function pushToDB(dbref, parsedObject, bidOrAsk, exchangeName, baseCurrency, quoteCurrency) {
    /*sample format of parsedObject: = [
        {
            price: 1,
            size: 1
        },
        {
            price: 2,
            size: 2
        }
    ]
    */
    //console.log("pushToDB running");
    dbref.child(bidOrAsk).child(quoteCurrency).child(exchangeName).child(baseCurrency).set(parsedObject);
}

const db = require("../src/db_config");
const favRecordName = require("../src/favRecordName");

module.exports = async function postFavorites(sessionID, exchange, crypto, currency, action) {
      
    let recordName = favRecordName(exchange, crypto, currency, action);
    db.ref('FAVORITES/' + sessionID + "/" + recordName).set({
        "exchange": exchange,
        "crypto": crypto,
        "currency": currency,
        "action": action
    });
    res.send("favorites updated");
}

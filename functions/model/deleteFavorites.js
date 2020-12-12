const db = require("../src/db_config");
const favRecordName = require("../src/favRecordName");

module.exports = function deleteFavorites(sessionID, exchange, crypto, currency, action) {
    let recordName = favRecordName(exchange, crypto, currency, action);
    db.ref('FAVORITES/' + sessionID + "/" + recordName).remove();    
}

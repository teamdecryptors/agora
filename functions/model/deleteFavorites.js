const admin = require('firebase-admin');
const initApp = admin.initializeApp();
const db = initApp.database();

module.exports = function deleteFavorites(res, req) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', "GET,POST,PUT,DELETE,OPTIONS");
    let uid = req.session.id;
    let exchange = req.body.exchange;
    let crypto = req.body.crypto;
    let currency = req.body.currency;
    let action = req.body.action;
    if (exchange == null || crypto == null || currency == null || action == null) {
        res.send("invalid request");
        return;
    }

    let recordName = createFavoriteRecordName(exchange, crypto, currency, action);
    console.log(recordName);
    db.ref('FAVORITES/' + uid + "/" + recordName).remove();
    res.send("Succesful deletion");
}

function createFavoriteRecordName(ex, cry, curr, act) {
    let name = ex + cry + curr + act;
    return name.toUpperCase();
}

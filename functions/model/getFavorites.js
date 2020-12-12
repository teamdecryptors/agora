const admin = require('firebase-admin');
const initApp = admin.initializeApp();
const db = initApp.database();

module.exports = function getFavorites(res, req) {
    res.set('Access-Control-Allow-Origin', '*');
    let uid = req.session.id;

    db.ref("FAVORITES/" + uid).on('value', (snapshot) => {
        res.json(snapshot.val());
    });
}

function createFavoriteRecordName(ex, cry, curr, act) {
    let name = ex + cry + curr + act;
    return name.toUpperCase();
}

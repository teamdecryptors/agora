const db = require('../src/db_config');

module.exports = async function getFavorites(sessionID) {
    let result = await db.ref("FAVORITES/" + sessionID).once('value');
    return result.val();
}

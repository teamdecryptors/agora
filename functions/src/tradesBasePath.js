module.exports = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    //is an even hour
    if(hours % 2 == 0) {
        if(minutes < 4) {
            return "TRADES1";
        } else {
            return "TRADES";
        }
    }
    //is an odd hour
    else {
        if(minutes < 4) {
            return "TRADES";
        } else {
            return "TRADES1";
        }
    }
}
const cryptoSigFigs = 5;
module.exports = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}
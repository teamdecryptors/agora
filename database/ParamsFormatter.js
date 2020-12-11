class paramsFormatter {
    /** DANIEL WORKSPACE START*/
    static formatCoinbase (baseCurrency, quoteCurrency) {
        return "/products/" + baseCurrency + "-" + quoteCurrency + "/book?level=3";
    }
    static formatBitfinex (baseCurrency, quoteCurrency) {
        return "/book/t" + baseCurrency + quoteCurrency + "/P1?len=100";
    }
    static formatCex_io (baseCurrency, quoteCurrency) {
        return "/" + baseCurrency + "/"+ quoteCurrency + "/";
    }
    static formatPoloniex (baseCurrency, quoteCurrency) {
        return "?command=returnOrderBook&currencyPair=" + quoteCurrency + "_"+ baseCurrency + "";
    }
    static formatGate_io (baseCurrency, quoteCurrency) {
        //currency_pair=BTC_USDT
        return "?currency_pair=" + baseCurrency + "_" + quoteCurrency + "";
    }
    static formatGemini (baseCurrency, quoteCurrency) {
        return "/" + baseCurrency + quoteCurrency ;
    }
    static formatOKCoin (baseCurrency, quoteCurrency) {
        return "/" + baseCurrency + "-" + quoteCurrency + "/book?size=200";
    }
    static formatBinance (baseCurrency, quoteCurrency) {
        return "/api/v3/depth?symbol=" + baseCurrency + quoteCurrency;
    }
    static formatFTX (baseCurrency, quoteCurrency) {
        return "/markets/" + baseCurrency + "/" + quoteCurrency + "/orderbook?depth=100";
    }
    static formatBitmex(baseCurrency, quoteCurrency) {
        let convertedQuoteCurrency = quoteCurrency;
        if (convertedQuoteCurrency === "BTC") {
            convertedQuoteCurrency = "XBT";
        }
        return "";
    }
    static formatDeribit(baseCurrency, quoteCurrency) {

    }
    static formatBitstamp(baseCurrency, quoteCurrency) {
        return baseCurrency.toLowerCase() + quoteCurrency.toLowerCase() + "/";
    }

    static formatBittrex(baseCurrency, quoteCurrency) {
        return baseCurrency + "-" + quoteCurrency + "/orderbook";
    }
    /** DANIEL WORKSPACE END*/


    /** JUAN WORKSPACE START*/
    static formatKRAKEN (baseCurrency, quoteCurrency){
        return "?pair=" + baseCurrency + quoteCurrency;
    }
    static formatBIT_Z  (baseCurrency, quoteCurrency){
        return "?symbol=" + baseCurrency.toLowerCase() + "_" + quoteCurrency.toLowerCase();
    }
    static formatBITFLYER(baseCurrency, quoteCurrency){
        return "?product_code=" + baseCurrency + "_" + quoteCurrency;
    }
    static formatBITHUMB(baseCurrency, quoteCurrency){
        return "/spot/orderBook?symbol=" + baseCurrency + "-"
        + quoteCurrency;
    }
    static formatBITBAY(baseCurrency, quoteCurrency){
        return "/" + baseCurrency + quoteCurrency + "/orderbook.json";
    }
    static formatCROSSTOWER(baseCurrency, quoteCurrency){
        return "/" + baseCurrency + quoteCurrency;
    }
    static formatHITBTC(baseCurrency, quoteCurrency){
        return "/public/orderbook/" + baseCurrency + quoteCurrency;
    }



    /** JUAN WORKSPACE END*/
}
module.exports = {
  paramsFormatter: paramsFormatter
}

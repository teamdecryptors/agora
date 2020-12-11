
module.exports = {
    COINBASE: {
        name: "COINBASE",
        api_url: "https://api.pro.coinbase.com",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "EOS", "DASH", "XTZ", "USDC"],
        quote_currencies: ["USD", "EUR", "BTC"]
    },

    /** ADVIK WORK SPACE START*/
    /** "BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "XML", "USDT", "DOT", "EOS", "TRX", "ADA", "DASH", "XTZ", "USDC" */
    BINANCE: {
        name: "BINANCE",
        api_url: "https://api.binance.us",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "USDT", "EOS", "ADA", "DASH", "XTZ", "USDC"],
        quote_currencies: ["USD", "BTC"]
    },
    FTX: {
        name: "FTX",
        api_url: "https://ftx.us/api",
        base_currencies: ["BTC", "ETH", "LTC", "BCH", "USDT"],
        quote_currencies: ["USD", "BTC"]
    },
    BITFINEX: {
        name: "BITFINEX",
        api_url: "https://api-pub.bitfinex.com/v2",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "USDT", "DOT", "EOS", "TRX", "ADA", "DASH", "XTZ", "USDC" ],
        quote_currencies: ["USD", "EUR", "BTC"]
    },
    BITMEX: {
        name: "BITMEX",
        api_url: "https://www.bitmex.com/api/v1",
        base_currencies: ["ETH", "LTC", "XRP", "LINK", "BCH", "DOT", "EOS", "TRX", "ADA", "XTZ"],
        /* BITMEX has XBT but not BTC */
        quote_currencies: ["USD", "BTC"]
    },
    KRAKEN: {
        name: "KRAKEN",
        api_url: "https://api.kraken.com/0/public/Depth",
        base_currencies: ["BTC"],
        quote_currencies: ["USD"]
    },
    HITBTC: {
        name: "HITBTC",
        api_url: "https://api.hitbtc.com/api/2",
        base_currencies: ["ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "XML", "EOS", "TRX", "ADA", "DASH", "XTZ"],
        quote_currencies: ["BTC"]
    },
    DERIBIT: {
        name: "DERIBIT",
        api_url: "https://www.deribit.com/ws/api/v2/",
        base_currencies: ["ETH"],
        quote_currencies: ["BTC"]
    },
    HUOBI: {
        name: "HUOBI",
        api_url: "https://api.huobi.pro",
        base_currencies: [],
        quote_currencies: []
    },
    BITSTAMP: {
        name: "BITSTAMP",
        api_url: "https://www.bitstamp.net/api/v2/order_book/",
        /* api url for all currency pairs: https://www.bitstamp.net/api/v2/order_book/{currency_pair}/ */
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "XLM", "LINK", "BCH", "USDC"],
        quote_currencies: ["USD", "EUR", "BTC"]
    },
    BITTREX: {
        name: "BITTREX",
        api_url: "https://api.bittrex.com/v3/markets/",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "USDT", "EOS", "TRX", "ADA", "DASH", "XTZ", "USDC"],
        quote_currencies: ["USD", "BTC"]
    },
    LIQUID: {
        name: "LIQUID",
        api_url: "https://api.liquid.com/",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "LINK", "BCH", "USDT", "DOT", "TRX", "DASH", "XTZ"],
        quote_currencies: ["USD", "BTC"],
        IDs: [{"id":"680","base":"DOT","quote":"BTC"},
            {"id":"660","base":"XTZ","quote":"BTC"},
            {"id":"84","base":"XRP","quote":"USD"},
            {"id":"654","base":"LINK","quote":"BTC"},
            {"id":"114","base":"BCH","quote":"BTC"},
            {"id":"27","base":"ETH","quote":"USD"},
            {"id":"37","base":"ETH","quote":"BTC"},
            {"id":"39","base":"BCH","quote":"USD"},
            {"id":"1","base":"BTC","quote":"USD"},
            {"id":"112","base":"LTC","quote":"BTC"},
            {"id":"117","base":"TRX","quote":"BTC"},
            {"id":"111","base":"XRP","quote":"BTC"},
            {"id":"116","base":"DASH","quote":"BTC"}]
    },
    /** ADVIK WORK SPACE END*/


 // "BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "XML", "USDT", "DOT", "EOS", "TRX", "ADA", "DASH", "XTZ", "USDC"
    /** VICENTE WORK SPACE START*/
    CEX_IO: {
        name: "CEX_IO",
        api_url: "https://cex.io/api/order_book",
        base_currencies: ["BTC", "ETH", "BCH", "DASH", "LTC", "XRP", "XLM", "ADA", "XTZ",  "LINK", "USDT", "DOT"],
        quote_currencies: ["USD", "EUR"]
    },
    POLONIEX: {
        name: "POLONIEX",
        api_url: "https://poloniex.com/public",
        base_currencies: ["ETH", "LTC", "XRP", "ZEC", "LINK", "BCH", "EOS", "DASH", "XTZ"],
        quote_currencies: ["BTC"]
    },
    GATE_IO: {
        name: "GATE_IO",
        api_url: "https://api.gateio.ws/api/v4/spot/order_book",
        base_currencies: ["ETH", "BTC", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "DOT", "EOS", "TRX", "DASH", "XTZ"],
        quote_currencies: ["BTC"]
    },
    GEMINI: {
        name: "GEMINI",
        api_url: "https://api.gemini.com/v1/book",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "DOT", "EOS", "TRX", "ADA", "DASH", "XTZ"],
        quote_currencies: ["USD"]
    },
    OKCOIN: {
        name: "OKCOIN",
        api_url: "https://okcoin.com/api/spot/v3/instruments",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "LINK", "BCH", "USDT", "DOT", "EOS", "TRX", "USDC"],
        quote_currencies: ["USD", "EUR"]
    },
    BITZ: {
        name: "BITZ",
        api_url: "https://apiv2.bitz.com/V2/Market/depth",
        base_currencies: ["ETH", "TRX"],
        quote_currencies: ["BTC"]
    },
    BITFLYER: {
        name: "BITFLYER",
        api_url: "https://api.bitflyer.com/v1/board",
        base_currencies: ["BTC", "ETH", "LTC", "BCH"],
        quote_currencies: ["USD", "EUR"]
    },
    BITHUMB: {
        name: "BITHUMB",
        api_url: "https://global-openapi.bithumb.pro/openapi/v1",
        base_currencies: ["ETH", "LTC", "ZEC", "LINK", "BCH", "TRX", "DASH"],
        quote_currencies: ["BTC"]
    },
    BITBAY: {
        name: "BITBAY",
        api_url: "https://bitbay.net/API/Public",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "XML", "USDT", "TRX", "DASH", "USDC"],
        quote_currencies: ["USD", "EUR", "BTC"]
    },
    CROSSTOWER: {
        name: "CROSSTOWER",
        api_url: "https://api.crosstower.com/api/2/public/orderbook",
        base_currencies: ["BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "USDC"],
        quote_currencies: ["BTC", "USD"]
    },
    /** VICENTE WORK SPACE END*/
}

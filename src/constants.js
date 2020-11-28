import ViewExchangesPage from './ViewExchangesPage';
import FavoritesPage from './FavoritesPage';
import EducationPage from './EducationPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

import usdIcon from '@iconify-icons/cryptocurrency/usd';
import btcIcon from '@iconify-icons/cryptocurrency/btc';
import eurIcon from '@iconify-icons/cryptocurrency/eur';
import ethIcon from '@iconify-icons/cryptocurrency/eth';
import ltcIcon from '@iconify-icons/cryptocurrency/ltc';
import xrpIcon from '@iconify-icons/cryptocurrency/xrp';
import zecIcon from '@iconify-icons/cryptocurrency/zec';
import xlmIcon from '@iconify-icons/cryptocurrency/xlm';
import linkIcon from '@iconify-icons/cryptocurrency/link';
import bchIcon from '@iconify-icons/cryptocurrency/bch';
import xmrIcon from '@iconify-icons/cryptocurrency/xmr';
import usdtIcon from '@iconify-icons/cryptocurrency/usdt';
import dotIcon from '@iconify-icons/cryptocurrency/dot';
import eosIcon from '@iconify-icons/cryptocurrency/eos';
import trxIcon from '@iconify-icons/cryptocurrency/trx';
import adaIcon from '@iconify-icons/cryptocurrency/ada';
import dashIcon from '@iconify-icons/cryptocurrency/dash';
import xtzIcon from '@iconify-icons/cryptocurrency/xtz';
import usdcIcon from '@iconify-icons/cryptocurrency/usdc';

export const pages = {
    EXCHANGES: {
        name: "Exchanges",
        pathname: "/",
        PageComponent: ViewExchangesPage
    },
    FAVORITES: {
        name: "Favorites",
        pathname: "/favorites",
        PageComponent: FavoritesPage
    },
    EDUCATION: {
        name: "Education",
        pathname: "/education",
        PageComponent: EducationPage
    },
    ABOUT: {
        name: "About",
        pathname: "/about",
        PageComponent: AboutPage
    },
    CONTACT: {
        name: "Contact",
        pathname: "/contact",
        PageComponent: ContactPage
    }
};

export const currencies = {
    USD: {
        name: "US Dollar",
        icon: usdIcon
    },
    EUR: {
        name: "Euro",
        icon: eurIcon
    },
    BTC: {
        name: "Bitcoin",
        icon: btcIcon
    },
    ETH: {
        name: "Ethereum",
        icon: ethIcon
    },
    LTC: {
        name: "Litecoin",
        icon: ltcIcon
    },
    XRP: {
        name: "XRP (Ripple)",
        icon: xrpIcon
    },
    ZEC: {
        name: "Zcash",
        icon: zecIcon
    },
    XLM: {
        name: "Stellar",
        icon: xlmIcon
    },
    LINK: {
        name: "Chainlink",
        icon: linkIcon
    },
    BCH: {
        name: "Bitcoin Cash",
        icon: bchIcon
    },
    XMR: {
        name: "Monero",
        icon: xmrIcon
    },
    USDT: {
        name: "Tether",
        icon: usdtIcon
    },
    DOT: {
        name: "Polkadot",
        icon: dotIcon
    },
    EOS: {
        name: "EOS",
        icon: eosIcon
    },
    TRX: {
        name: "TRON",
        icon: trxIcon
    },
    ADA: {
        name: "Cardano",
        icon: adaIcon
    },
    DASH: {
        name: "Dash",
        icon: dashIcon
    },
    XTZ: {
        name: "Tezos",
        icon: xtzIcon
    },
    USDC: {
        name: "US Dollar Coin",
        icon: usdcIcon
    }
};

export const quoteCurrencies = ["USD", "BTC", "EUR"];

export const baseCurrencies = [
    "BTC", "ETH", "LTC", "XRP", "ZEC", "XLM", "LINK", "BCH", "XMR", "USDT", 
    "DOT", "EOS", "TRX", "ADA", "DASH", "XTZ", "USDC"
];
    
export const searchTypes = {
    QUOTE_AMOUNT: "quote",
    PAIR: "pair"
};

export const transactionTypes = {
    BUY: "buy",
    SELL: "sell"
};

export const names = {
    Jessica: "Jessica Arambulo",
    Mark: "Mark Napasa",
    Jason: "Jason Vega",
    Andrew: "Andrew Kim",
    Yishai: "Yishai Silver",
    Nick: "Nick Oliveira",
    Advik: "Advik Passi",
    Varun: "Varun Baddam",
    Juan: "Juan Ramirez",
    Daniel: "'Daniel' Haocheng Li",
    Vicente: "Vicente Montoya Hernandez"
};

export const roles = {
    BA: "Business Analyst",
    QA: "Quality Assurance Lead",
    UI: "User Interface Specialist",
    PM: "Project Manager",
    AS: "Algorithm Specialist",
    SA: "Software Architect",
    SSA: "Senior System Analyst",
    DS: "Database Specialist",
    SDL: "Software Development Lead"
};

export const bios = {
    vicente_bio: "I am third year Computer Science student at UCSD. My favorite subjects in Computer Science are Operating Systems and Programming Language.  I love learning new programming languages :). My favorite one so far is Swift for its easy to read and write syntax, flexibility as a object-oriented and functional language, as well as its easy integration with UI, through SwiftUI. My favorite hobby is playing guitar and piano.",
    jason_bio: "I am a third year UCSD computer science major from the Bay Area. I work on the frontend side of agora, including designing the layout of the site and implementing the React JS code. My interests and hobbies include: artificial intelligence, playing the violin and exploring the outdoors.",
    jessica_bio: "I'm a third year UCSD Computer Science major from the Los Angeles Area. I am one of the frontend programmers for agora and fun fact agora is the first project I've ever worked on! My interests and hobbies include playing the guitar/ukulele, fashion, and R&B/Hip-Hop music.",
    yishai_bio: "Hello, I am a third year Computer Science student at UCSD. In general, I get a kick out of exploring new technologies/algorithms and the ways in which I can use them; video-games and AI are the usual suspects, but it ranges from Arduino door locks to Minecraft redstone computers. Academically speaking, I really enjoy the if-this-then-that mentality of my algorithms and digital systems classes. And when I'm not busy being a nerd, you can probably find me surfing, camping, or backpacking.",
    mark_bio: "I am a third year Computer Science major at UCSD as well as Agora’s algorithm specialist. Some of my biggest career based interests are web/app/game development because I find them the most rewarding for the work put in. Aside from school and work I’m a huge weeb so I love anime/manga. I also enjoy dancing and drawing!",
    nick_bio: "I am a fourth year transfer CSE major from San Diego and the Software Architect for Agora. I enjoy backend web development and databases. My hobbies include powerlifting, video games, and fishing. I hope to one day work in the Defense industry.",
    juan_bio: "Hey I'm a third year student in Computer Science at UCSD. Currently do not know what subfield of CS I like the most although lately I've been very interested in computer graphics. I mean making digital things photorealistic is just amazing to me. Aside from video games, I've been enjoying my time with some hiking and learning guitar little by little.",
    daniel_bio: "I am a third year Computer Science major at UCSD, and Agora's database specialist. My favorite areas in computer science are web-development and also game development, which introduced me to coding in high school. Aside from school, I produce music, mostly electronic but sometimes hip hop.",
    varun_bio: "I am a fourth year Computer Science student at UCSD, and Agora’s business analyst. I enjoy data analytics and exploring new developments in cyber security. In my free time I like to play basketball, read, and enjoy the great outdoors.",
    advik_bio: "I am a third year Computer Science student at UCSD and the Senior System Analyst for Agora. I enjoy algorithm design because I have always loved puzzles and algorithm design lets me solve CS puzzles using creative and efficient solutions. I love creating web-based applications and working with databases to handle and interpret data. While I’m not programming, I enjoy photography, videography, and graphic design.",
    andrew_bio:"Third year CSE major and geology minor at UCSD.  I like computer modelling, procedural generation, and working on visual design.  Outside of my major, I love studying geomorphology and urban anthropology, and I frequently apply these topics to my hobby of fantasy mapmaking."
};

export const Exchanges = {
    Binance_US: "Binance US",
    FTX: "FTX",
    Bitfinex: "Bitfinex",
    BitMEX: "BitMEX",
    Kraken: "Kraken",
    HitBTC: "HitBTC",
    Deribit: "Deribit",
    Coinbase_Pro: "Coinbase Pro",
    Bitstamp: "Bitstamp",
    Bittrex: "Bittrex",
    Liquid: "Liquid",
    CEX: "CEX.IO",
    Poloniex: "Poloniex",
    Gate: "Gate.io",
    Gemini: "Gemini",
    OKCoin: "OKCoin",
    Bit_Z: "Bit-Z",
    bitFlyer: "bitFlyer",
    Bithumb: "Bithumb",
    BitBay: "BitBay",
    CrossTower: "CrossTower"
}

export const Exchange_URLs = {
    Binance_US: "https://www.binance.us/en/home",
    FTX: "https://ftx.com/en",
    Bitfinex: "https://www.bitfinex.com/",
    BitMEX: "https://www.bitmex.com/",
    Kraken: "https://www.kraken.com/en-us/",
    HitBTC: "https://hitbtc.com/",
    Deribit: "https://www.deribit.com/",
    Coinbase_Pro: "https://pro.coinbase.com/",
    Bitstamp: "https://www.bitstamp.net/",
    Bittrex: "https://bittrex.com/",
    Liquid: "https://www.liquid.com/",
    CEX: "https://cex.io/",
    Poloniex: "https://poloniex.com/",
    Gate: "https://www.gate.io/",
    Gemini: "https://gemini.com/?utm_source=Google%20AdWords&utm_campaign=USA_Search_Gemini&utm_medium=paid%20advertising&utm_content=56412057490&utm_term=gemini%20crypto&gclid=CjwKCAiA5IL-BRAzEiwA0lcWYrV17vl64h4UYxtKrcoqKWopdcTQhmOmya1uyZ4Gw9VtFboN7pTwkBoCqkEQAvD_BwE",
    OKCoin: "https://www.okcoin.com/us/",
    Bit_Z: "https://www.bitz.ai/",
    bitFlyer: "https://bitflyer.com/en-us/",
    Bithumb: "https://en.bithumb.com/",
    BitBay: "https://bitbay.net/en",
    CrossTower: "https://crosstower.com/"
}

export const logos = {
    Binance_US: "./exchange_logos/Binance_US.png",
    FTX: "./exchange_logos/FTX.png",
    Bitfinex: "./exchange_logos/Bitfinex.png",
    BitMEX: "./exchange_logos/BitMEX.jpg",
    Kraken: "./exchange_logos/Kraken.png",
    HitBTC: "./exchange_logos/HitBTC.png",
    Deribit: "./exchange_logos/Deribit.png",
    Coinbase_Pro: "/exchange_logos/Coinbase_Pro.png",
    Bitstamp: "./exchange_logos/Bitstamp.png",
    Bittrex: "./exchange_logos/Bittrex.png",
    Liquid: "./exchange_logos/Liquid.png",
    CEX: "./exchange_logos/CEX.png",
    Poloniex: "./exchange_logos/Poloniex.png",
    Gate: "./exchange_logos/Gate.png",
    Gemini: "./exchange_logos/Gemini.png",
    OKCoin: "./exchange_logos/OKCoin.png",
    Bit_Z: "./exchange_logos/Bit_Z.png",
    bitFlyer: "./exchange_logos/bitFlyer.png",
    Bithumb: "./exchange_logos/Bithumb.png",
    BitBay: "./exchange_logos/BitBay.png",
    CrossTower: "./exchange_logos/CrossTower.png"
}

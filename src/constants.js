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

import ViewExchangesPage from './ViewExchangesPage';
import FavoritesPage from './FavoritesPage';
import EducationPage from './EducationPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

import binanceLogo from './exchange_logos/Binance_US.png';
import bitbayLogo from './exchange_logos/BitBay.png';
import bitfinexLogo from './exchange_logos/Bitfinex.png';
import bitflyerLogo from './exchange_logos/bitFlyer.png';
import bithumbLogo from './exchange_logos/Bithumb.png';
import bitstampLogo from './exchange_logos/Bitstamp.png';
import bittrexLogo from './exchange_logos/Bittrex.png';
import bitzLogo from './exchange_logos/Bit_Z.png';
import cexLogo from './exchange_logos/CEX.png';
import coinbaseLogo from './exchange_logos/Coinbase_Pro.png';
import crosstowerLogo from './exchange_logos/CrossTower.png';
import ftxLogo from './exchange_logos/FTX.png';
import gateLogo from './exchange_logos/Gate.png';
import geminiLogo from './exchange_logos/Gemini.png';
import hitbtcLogo from './exchange_logos/HitBTC.png';
import krakenLogo from './exchange_logos/Kraken.png';
import liquidLogo from './exchange_logos/Liquid.png';
import okcoinLogo from './exchange_logos/OKCoin.png';
import poloniexLogo from './exchange_logos/Poloniex.png';

import vicente_headshot from './headshots/vicente_headshot.png';
import yishai_headshot from './headshots/yishai_headshot.png';
import jason_headshot from './headshots/jason_headshot.png';
import jessica_headshot from './headshots/jessica_headshot.png';
import andrew_headshot from './headshots/andrew_headshot.png';
import juan_headshot from './headshots/juan_headshot.png';
import nick_headshot from './headshots/nick_headshot.png';
import advik_headshot from './headshots/advik_headshot.png';
import varun_headshot from './headshots/varun_headshot.png';
import mark_headshot from './headshots/mark_headshot.png';
import daniel_headshot from './headshots/daniel_headshot.png';

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
    QUOTE_AMOUNT: "budget",
    PAIR: "pair"
};

export const transactionTypes = {
    BUY: "bids",
    SELL: "asks"
};

export const teamMembers = {
    Jessica: {
        fullName: "Jessica Arambulo",
        bio: "I'm a third year UCSD Computer Science major from the Los Angeles Area. I am one of the frontend programmers for agora and fun fact agora is the first project I've ever worked on! My interests and hobbies include playing the guitar/ukulele, fashion, and R&B/Hip-Hop music.",
        role: "Quality Assurance Lead",
        headshot: jessica_headshot
    },
    Mark: {
        fullName: "Mark Napasa",
        bio: "I am a third year Computer Science major at UCSD as well as Agora’s algorithm specialist. Some of my biggest career based interests are web/app/game development because I find them the most rewarding for the work put in. Aside from school and work I’m a huge weeb so I love anime/manga. I also enjoy dancing and drawing!",
        role: "Algorithm Specialist",
        headshot: mark_headshot
    },
    Jason: {
        fullName: "Jason Vega",
        bio: "I am a third year UCSD computer science major from the Bay Area. I work on the frontend side of agora, including designing the layout of the site and implementing the React JS code. My interests and hobbies include: artificial intelligence, playing the violin and exploring the outdoors.",
        role:"User Interface Specialist",
        headshot: jason_headshot
    },
    Andrew: {
        fullName: "Andrew Kim",
        bio: "Third year CSE major and geology minor at UCSD.  I like computer modelling, procedural generation, and working on visual design.  Outside of my major, I love studying geomorphology and urban anthropology, and I frequently apply these topics to my hobby of fantasy mapmaking.",
        role: "User Interface Specialist",
        headshot: andrew_headshot
    },
    Yishai: {
        fullName: "Yishai Silver",
        bio: "Hello, I am a third year Computer Science student at UCSD. In general, I get a kick out of exploring new technologies/algorithms and the ways in which I can use them; video-games and AI are the usual suspects, but it ranges from Arduino door locks to Minecraft redstone computers. Academically speaking, I really enjoy the if-this-then-that mentality of my algorithms and digital systems classes. And when I'm not busy being a nerd, you can probably find me surfing, camping, or backpacking.",
        role: "Software Development Lead",
        headshot: yishai_headshot
    },
    Nick: {
        fullName: "Nick Oliveira",
        bio: "I am a fourth year transfer CSE major from San Diego and the Software Architect for Agora. I enjoy backend web development and databases. My hobbies include powerlifting, video games, and fishing. I hope to one day work in the Defense industry.",
        role: "Software Architect",
        headshot: nick_headshot
    },
    Advik: {
        fullName: "Advik Passi",
        bio: "I am a third year Computer Science student at UCSD and the Senior System Analyst for Agora. I enjoy algorithm design because I have always loved puzzles and algorithm design lets me solve CS puzzles using creative and efficient solutions. I love creating web-based applications and working with databases to handle and interpret data. While I’m not programming, I enjoy photography, videography, and graphic design.",
        role: "Senior System Analyst",
        headshot: advik_headshot
    },
    Varun: {
        fullName: "Varun Baddam",
        bio: "I am a fourth year Computer Science student at UCSD, and Agora’s business analyst. I enjoy data analytics and exploring new developments in cyber security. In my free time I like to play basketball, read, and enjoy the great outdoors.",
        role: "Business Analyst",
        headshot: varun_headshot
    },
    Juan: {
        fullName: "Juan Ramirez",
        bio: "Hey I'm a third year student in Computer Science at UCSD. Currently do not know what subfield of CS I like the most although lately I've been very interested in computer graphics. I mean making digital things photorealistic is just amazing to me. Aside from video games, I've been enjoying my time with some hiking and learning guitar little by little.",
        role: "Database Specialist",
        headshot: juan_headshot
    },
    Daniel: {
        fullName: "'Daniel' Haocheng Li",
        bio: "I am a third year Computer Science major at UCSD, and Agora's database specialist. My favorite areas in computer science are web-development and also game development, which introduced me to coding in high school. Aside from school, I produce music, mostly electronic but sometimes hip hop.",
        role: "Database Specialist",
        headshot: daniel_headshot
    },
    Vicente: {
        fullName: "Vicente Montoya Hernandez",
        bio: "I am third year Computer Science student at UCSD. My favorite subjects in Computer Science are Operating Systems and Programming Language.  I love learning new programming languages :). My favorite one so far is Swift for its easy to read and write syntax, flexibility as a object-oriented and functional language, as well as its easy integration with UI, through SwiftUI. My favorite hobby is playing guitar and piano.",
        role: "Project Manager",
        headshot: vicente_headshot
    } 
};

export const exchanges = {
    BINANCE: {
        exchangeName: "Binance US",
        link: "https://www.binance.us/en/home",
        logoImage: binanceLogo
    },
    BITBAY: {
        exchangeName: "BitBay",
        link: "https://bitbay.net/en",
        logoImage: bitbayLogo
    },
    BITFINEX: {
        exchangeName: "Bitfinex",
        link: "https://ftx.com/en",
        logoImage: bitfinexLogo
    },
    BITFLYER: {
        exchangeName: "bitFlyer",
        link: "https://bitflyer.com/en-us/",
        logoImage: bitflyerLogo
    },
    BITHUMB: {
        exchangeName: "Bithumb",
        link: "https://en.bithumb.com/",
        logoImage: bithumbLogo
    },
    BITSTAMP: {
        exchangeName: "Bitstamp",
        link: "https://www.bitstamp.net/",
        logoImage: bitstampLogo
    },
    BITTREX: {
        exchangeName: "Bittrex",
        link: "https://bittrex.com/",
        logoImage: bittrexLogo
    },
    BITZ: {
        exchangeName: "Bit Z",
        link: "https://www.bitz.ai/",
        logoImage: bitzLogo
    },
    CEX_IO: {
        exchangeName: "CEX",
        link: "https://cex.io/",
        logoImage: cexLogo
    },
    COINBASE: {
        exchangeName: "Coinbase Pro",
        link: "https://pro.coinbase.com/",
        logoImage: coinbaseLogo
    },
    CROSSTOWER: {
        exchangeName: "CrossTower",
        link: "https://crosstower.com/",
        logoImage: crosstowerLogo
    },
    FTX: {
        exchangeName: "FTX",
        link: "https://ftx.com/en",
        logoImage: ftxLogo
    },
    GATE_IO: {
        exchangeName: "Gate",
        link: "https://www.gate.io/",
        logoImage: gateLogo
    },
    GEMINI: {
        exchangeName: "Gemini",
        link: "https://gemini.com/",
        logoImage: geminiLogo
    },
    HITBTC: {
        exchangeName: "HitBTC",
        link: "https://hitbtc.com/",
        logoImage: hitbtcLogo
    },
    KRAKEN: {
        exchangeName: "Kraken",
        link: "https://www.kraken.com/en-us/",
        logoImage: krakenLogo
    },
    LIQUID: {
        exchangeName: "Liquid",
        link: "https://www.liquid.com/",
        logoImage: liquidLogo
    },
    OKCOIN: {
        exchangeName: "OKCoin",
        link: "https://www.okcoin.com/us/",
        logoImage: okcoinLogo
    },
    POLONIEX: {
        exchangeName: "Poloniex",
        link: "https://poloniex.com/",
        logoImage: poloniexLogo
    }
};




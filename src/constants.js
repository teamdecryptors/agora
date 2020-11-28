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
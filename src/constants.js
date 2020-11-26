import ViewExchangesPage from './ViewExchangesPage';
import FavoritesPage from './FavoritesPage';
import EducationPage from './EducationPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

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

export const quoteCurrencies = {
    USD: "US Dollar",
    BTC: "Bitcoin",
    EUR: "Euro"
};

export const baseCurrencies = {
    BTC: "Bitcoin",
    ETH: "Ethereum",
    LTC: "Litecoin",
    XRP: "XRP (Ripple)",
    ZEC: "Zcash",
    XLM: "Stellar",
    LINK: "Chainlink",
    BCH: "Bitcoin Cash",
    XML: "Monero",
    USDT: "Tether",
    DOT: "Polkadot",
    EOS: "EOS",
    TRX: "TRON",
    ADA: "Cardano",
    DASH: "Dash",
    XTZ: "Tezos",
    USDC: "US Dollar Coin"
};

export const searchTypes = {
    BUDGET: "budget",
    PAIR: "pair"
};

export const transactionTypes = {
    BUY: "buy",
    SELL: "sell"
};
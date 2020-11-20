import ViewExchangesPage from './ViewExchangesPage';
import FavoritesPage from './FavoritesPage';
import EducationPage from './EducationPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

export const navbarLinks = {
    EXCHANGES: {
        name: "Exchanges",
        pageComponent: ViewExchangesPage
    },
    FAVORITES: {
        name: "Favorites",
        pageComponent: FavoritesPage
    },
    EDUCATION: {
        name: "Education",
        pageComponent: EducationPage
    },
    ABOUT: {
        name: "About",
        pageComponent: AboutPage
    },
    CONTACT: {
        name: "Contact",
        pageComponent: ContactPage
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
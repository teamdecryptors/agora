import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SearchBox from './SearchBox';
import ExchangeResult from './ExchangeResult';
import { 
    searchTypes,
    baseCurrencies,
    quoteCurrencies,
    transactionTypes
} from './constants';
import './ViewExchangesPage.css';

function moveSearchBoxToMiddle() {
    const viewExchangesPageWrapper = 
            document.getElementById("viewExchangesPageWrapper");
    const root = document.getElementById("root");
        
    document.documentElement.classList.add("h-100"); // <html>
    document.body.classList.add("h-100");
    root.classList.add("h-100");
    root.getElementsByClassName("container")[0].classList.add("h-100");
        
    viewExchangesPageWrapper.classList.add("h-100", "align-items-center");
}

function moveSearchBoxToTop() {
    const viewExchangesPageWrapper = 
            document.getElementById("viewExchangesPageWrapper");
    const root = document.getElementById("root");
        
    document.documentElement.classList.remove("h-100"); // <html>
    document.body.classList.remove("h-100");
    root.classList.remove("h-100");
    root.getElementsByClassName("container")[0].classList.remove("h-100");
        
    viewExchangesPageWrapper.classList.remove("h-100", "align-items-center");
    viewExchangesPageWrapper.classList.add("pt-5");
}

function ViewExchangesPage(props) {
    const defaultBaseCurrency = baseCurrencies[0];
    const defaultQuoteCurrency = quoteCurrencies[0];

    const [searchType, setSearchType] = useState(searchTypes.QUOTE_AMOUNT);
    const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
    const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] =
        useState(transactionTypes.BUY);
    const [searchResults, setSearchResults] = useState([]);

    const shouldMoveSearchBoxToTop = searchResults.length > 0;

    const onSearchBoxSearchButtonClick = () => {
        // Temporary
        setSearchResults(searchResults + [1]);
    };

    useEffect(() => {
        if (shouldMoveSearchBoxToTop) {
            moveSearchBoxToTop();
        }
        else {
            moveSearchBoxToMiddle();
        }
    }, [shouldMoveSearchBoxToTop]);

    return (
        <Row id="viewExchangesPageWrapper">
            <Col>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <ToggleButtonGroup
                            type="radio"
                            name="searchTypeOptions"
                            id="searchTypeOptions"
                            defaultValue={searchTypes.QUOTE_AMOUNT}
                        >
                            <ToggleButton
                                variant="outline-secondary"
                                value={searchTypes.QUOTE_AMOUNT}
                                onClick={() => setSearchType(searchTypes.QUOTE_AMOUNT)}
                                className="shadow-none"
                            >
                                {
                                    transactionType === transactionTypes.BUY ?
                                        "What can I buy with my budget?" :
                                        "What should I sell to get this amount?"
                                }
                            </ToggleButton>
                            <ToggleButton
                                variant="outline-secondary"
                                value={searchTypes.PAIR}
                                onClick={() => setSearchType(searchTypes.PAIR)}
                                className="shadow-none"
                            >
                                I know which pairing I want!
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <SearchBox
                    baseCurrency={baseCurrency}
                    onBaseCurrencyChange={setBaseCurrency}
                    quoteCurrency={quoteCurrency}
                    onQuoteCurrencyChange={setQuoteCurrency}
                    amount={amount}
                    onAmountChange={setAmount}
                    transactionType={transactionType}
                    onTransactionTypeChange={setTransactionType}
                    searchType={searchType}
                    onSearchButtonClick={onSearchBoxSearchButtonClick}
                />
                <ExchangeResult exchangeName='FTX' buyOrSell='Buy' amount='4' baseCurrrency="BTC" quoteCurrency="USD" favorited={true}/>
            </Col>
        </Row>
    );
}

export default ViewExchangesPage;
import React, { useState, useEffect, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Icon } from '@iconify/react';
import Collapsible from 'react-collapsible';
import SearchBox from './SearchBox';
import { 
    searchTypes,
    currencies,
    baseCurrencies,
    quoteCurrencies,
    transactionTypes
} from './constants';
import './SearchPage.css';
import ExchangeResult from "./ExchangeResult";
import HandleErrors from "./HandleErrors";

function moveSearchBoxToMiddle() {
    const searchPageWrapper = 
            document.getElementById("searchPageWrapper");
    const root = document.getElementById("root");
        
    document.documentElement.classList.add("h-100"); // <html>
    document.body.classList.add("h-100");
    root.classList.add("h-100");
    root.getElementsByClassName("container")[0].classList.add("h-100");
        
    searchPageWrapper.classList.add("h-100", "align-items-center");
}

function moveSearchBoxToTop() {
    const searchPageWrapper = 
            document.getElementById("searchPageWrapper");
    const root = document.getElementById("root");
        
    document.documentElement.classList.remove("h-100"); // <html>
    document.body.classList.remove("h-100");
    root.classList.remove("h-100");
    root.getElementsByClassName("container")[0].classList.remove("h-100");
        
    searchPageWrapper.classList.remove("h-100", "align-items-center");
    searchPageWrapper.classList.add("pt-5");
}

function checkAmount(amount){
    if (amount < 0 || isNaN(amount) || amount === '-0'){
        return <HandleErrors/>
    }
}

function SearchPage(props) {
    const defaultBaseCurrency = baseCurrencies[0];
    const defaultQuoteCurrency = quoteCurrencies[0];

    const [searchType, setSearchType] = useState(searchTypes.QUOTE_AMOUNT);
    const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
    const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] =
        useState(transactionTypes.BUY);
    const [searchResults, setSearchResults] = useState([]);
    const [isRetrievingResults, setIsRetrievingResults] = useState(false);
    const [searchResultBases, setResultBases] = useState([]);

    const shouldMoveSearchBoxToTop = useMemo(() => {
        return searchResults.length > 0;
    }, [searchResults.length]);

    const onSearchBoxSearchButtonClick = async () => {
        let baseUrl = "https://agora.bid/api/offerings";

        baseUrl += "/" + transactionType + "/" + searchType;

        setIsRetrievingResults(true);

        if (searchType === searchTypes.PAIR) {
            baseUrl += "/" + baseCurrency;
        }

        baseUrl += "/" + quoteCurrency + "/" + amount;

        let response = await fetch(baseUrl);
        let offerings = await response.json();

        // Temporary
        for (let offering of offerings.offerings) {
            offering.TransactionType = transactionType;
        }

        setSearchResults(offerings.offerings);

        setIsRetrievingResults(false);
    };

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    useEffect(() => {
        if (shouldMoveSearchBoxToTop) {
            moveSearchBoxToTop();
        }
        else if (!isRetrievingResults) {
            moveSearchBoxToMiddle();
        }
    }, [shouldMoveSearchBoxToTop, isRetrievingResults]);

    return (
        <Row id="searchPageWrapper">
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
                {
                    checkAmount(amount)
                }
                {
                    isRetrievingResults &&
                    <Row className="mt-2 mb-4">
                        <Col className="text-center">
                            <Spinner animation="border" />
                        </Col>
                    </Row>
                }
                {
                    searchResults.map((result) => {
                        searchResultBases.push(result.CryptoCurrency);
                    })
                }
                
                {
                    searchType === searchTypes.PAIR &&
                        searchResults.length > 0 &&
                        searchResults.map((result, index) => {
                            return (
                                <ExchangeResult
                                    key={`${result.Exchange}-${index}`}
                                    exchange={result.Exchange}
                                    transactionType={result.TransactionType}
                                    amount={result.Amount}
                                    price={result.Price}
                                    baseCurrency={result.CryptoCurrency}
                                    quoteCurrency={result.Currency}
                                    searchType={searchType}
                                />);
                        })
                }
                {
                    searchType === searchTypes.QUOTE_AMOUNT &&
                        searchResults.length > 0 &&
                        searchResultBases.filter(onlyUnique).map((base) => {
                            const quoteSearchResultHeader = (
                                <span className="d-flex align-items-center">
                                    <Icon icon={currencies[base].icon} className="mr-2" />
                                    {currencies[base].name} ({base})
                                </span>
                            );

                            return(
                                <Collapsible trigger={quoteSearchResultHeader}>
                                    <div style={{width:'100%'}} class="content">
                                        {   
                                            searchResults.filter((result) => result.CryptoCurrency === base).map((result, index) => {
                                                return (
                                                    <ExchangeResult
                                                        key={`${result.Exchange}-${index}`}
                                                        exchange={result.Exchange}
                                                        transactionType={result.TransactionType}
                                                        amount={result.Amount}
                                                        price={result.Price}
                                                        baseCurrency={result.CryptoCurrency}
                                                        quoteCurrency={result.Currency}
                                                        searchType={searchType}
                                                    />
                                                );
                                            })
                                        }
                                    </div>
                                </Collapsible>
                            );
                        })
                        
                    }
            </Col>
        </Row>
    );
}

export default SearchPage;
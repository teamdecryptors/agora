import React, { useState, useEffect, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SearchBox from './SearchBox';
import { 
    searchTypes,
    baseCurrencies,
    quoteCurrencies,
    transactionTypes
} from './constants';
import './SearchPage.css';
import ExchangeResult from "./ExchangeResult";
import HandleErrors from "./HandleErrors";
import BaseResult from './BaseResult';
import logo from './logo.svg';

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

function errorHandling(amount) {
    if (amount <= 0 || isNaN(amount)){
        return true;
    }
}

function SearchPage(props) {
    const defaultBaseCurrency = baseCurrencies[0];
    const defaultQuoteCurrency = quoteCurrencies[0];

    const [searchType, setSearchType] = useState(searchTypes.QUOTE_AMOUNT);
    const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
    const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);
    const [amount, setAmount] = useState(1);
    const [transactionType, setTransactionType] =
        useState(transactionTypes.BUY);
    const [searchResults, setSearchResults] = useState([]);
    const [isRetrievingResults, setIsRetrievingResults] = useState(false);
    const [searchResultBases, setSearchResultBases] = useState([]);
    const [lastSearchType, setLastSearchType] = useState(searchType);

    const isError = useMemo(() => errorHandling(amount), [amount]);
    const [showError, setShowError] = useState(false);

    const shouldMoveSearchBoxToTop = useMemo(() => {
        return searchResults.length > 0;
    }, [searchResults.length]);

    const receiveInput = async () =>{
        let baseUrl = "https://agora.bid/api/offerings";

        baseUrl += "/" + transactionType + "/" + searchType;

        setIsRetrievingResults(true);

        if (searchType === searchTypes.PAIR) {
            baseUrl += "/" + baseCurrency;
        }

        baseUrl += "/" + quoteCurrency + "/" + amount;

        let response = await fetch(baseUrl);
        let offerings = await response.json(); 

        for (let offering of offerings.offerings) {
            offering.TransactionType = transactionType;
        }

        setSearchResults(offerings.offerings);
        console.log(offerings);
        setLastSearchType(searchType);

        setIsRetrievingResults(false);
    }

    function improperInput(){
        setShowError(isError);

        if (isError) {
            return true;
        }

        return false;
    }

    const onSearchBoxSearchButtonClick = async () => {
        if (improperInput()){
            return;
        }

        receiveInput();

    };

    useEffect(() => {
        if (shouldMoveSearchBoxToTop) {
            moveSearchBoxToTop();
        }
        else if (!isRetrievingResults) {
            moveSearchBoxToMiddle();
        }
    }, [shouldMoveSearchBoxToTop, isRetrievingResults]);

    useEffect(() => {
        const newSearchResultBases = [];

        for (let result of searchResults) {
            if (!newSearchResultBases.includes(result.CryptoCurrency)) {
                newSearchResultBases.push(result.CryptoCurrency);
            }
        }

        setSearchResultBases(newSearchResultBases);
    }, [searchResults]);

    return (    
        <Row id="searchPageWrapper">
            <Col>
                {
                    showError && 
                    <HandleErrors onCloseError={setShowError} />
                }
                {
                    !shouldMoveSearchBoxToTop &&
                    <Row className="justify-content-center mb-4">
                        <img src={logo} alt="logo" width="15%" height="15%"/>
                    </Row>
                }
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
                    isRetrievingResults &&
                    <Row className="mt-2 mb-4">
                        <Col className="text-center">
                            <Spinner animation="border" />
                        </Col>
                    </Row>
                }
                {
                    lastSearchType === searchTypes.QUOTE_AMOUNT &&
                        searchResultBases.map((currency, index) => {
                            const baseResults = searchResults.filter((result) => {
                                return result.CryptoCurrency === currency;
                            });

                            return (
                                <BaseResult
                                    key={`${currency}-${index}`}
                                    base={currency}
                                    results={baseResults}
                                    searchType={lastSearchType}
                                />
                            );
                        })
                }
                {
                    lastSearchType === searchTypes.PAIR &&
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
                                    defaultStarColor={result.isFavorited ? 'gold' : 'lightgray'}
                                    searchType={lastSearchType}
                                />);
                        })
                }
            </Col>
        </Row>
    );
}

export default SearchPage;
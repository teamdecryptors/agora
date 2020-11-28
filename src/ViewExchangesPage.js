import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SearchBox from './SearchBox';
import { 
    searchTypes,
    baseCurrencies,
    quoteCurrencies,
    transactionTypes
} from './constants';
import './ViewExchangesPage.css';

function ViewExchangesPage(props) {
    const defaultBaseCurrency = baseCurrencies[0];
    const defaultQuoteCurrency = quoteCurrencies[0];

    const [searchType, setSearchType] = useState(searchTypes.QUOTE_AMOUNT);
    const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
    const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] =
        useState(transactionTypes.BUY);

    const onSearchBoxBaseCurrencyChange = (currency) => {
        setBaseCurrency(currency);
    };

    const onSearchBoxQuoteCurrencyChange = (currency) => {
        setQuoteCurrency(currency);
    };

    const onSearchBoxAmountChange = (amount) => {
        setAmount(amount);
    };

    const onSearchBoxTransactionTypeChange = (type) => {
        setTransactionType(type);
    }

    return (
        <>
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
                onBaseCurrencyChange={onSearchBoxBaseCurrencyChange}
                quoteCurrency={quoteCurrency}
                onQuoteCurrencyChange={onSearchBoxQuoteCurrencyChange}
                amount={amount}
                onAmountChange={onSearchBoxAmountChange}
                transactionType={transactionType}
                onTransactionTypeChange={onSearchBoxTransactionTypeChange}
                searchType={searchType}
            />
        </>
    );
}

export default ViewExchangesPage;
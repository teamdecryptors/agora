import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import Switch from 'react-switch';
import { Icon } from '@iconify/react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import './SearchBox.css';
import {
    currencies,
    quoteCurrencies,
    baseCurrencies,
    searchTypes,
    transactionTypes
} from './constants';

function getCurrencySearchOption(abbreviation) {
    const {name} = currencies[abbreviation];
    
    return {
        value: abbreviation,
        label: `${name} (${abbreviation})`
    };
}

function SearchBox(props) {
    const quoteCurrencySearchOptions = quoteCurrencies.map((abbreviation) => 
        getCurrencySearchOption(abbreviation))
    const baseCurrencySearchOptions = baseCurrencies.map((abbreviation) => 
        getCurrencySearchOption(abbreviation));

    const isQuoteAmountSearch = props.searchType === searchTypes.QUOTE_AMOUNT;
    const isBuyTransaction = props.transactionType === transactionTypes.BUY;

    const baseCurrencyColumnSize = 4;
    const quoteCurrencyColumnSize = isQuoteAmountSearch ? 8 : 4;
    const arrowColumnSize = "auto";
    const amountColumnSize = 2;

    const currencySelectorTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#CCF4C8',
            primary: '#7EEC73',
        }
    });

    const onTransactionTypeChange = (checked) => {
        // checked === true means toggle in right (sell) position
        const transactionType = checked ?
            transactionTypes.SELL :
            transactionTypes.BUY;

        props.onTransactionTypeChange(transactionType);
    };

    const getAmountInputIcon = () => {
        const currency = isQuoteAmountSearch ? 
            props.quoteCurrency : props.baseCurrency;

        return currencies[currency].icon;
    }

    const getAmountInputLabel = () => {
        let label = "";

        if (isQuoteAmountSearch) {
            if (isBuyTransaction) {
                label = "Budget";
            }
            else {
                label = "Amount";
            }
        }
        else {
            label = "Base Amount";
        }

        return label;
    }

    return (
        <>
            <Row>
                <Col>
                    <Form id="searchBox">
                        <Form.Row className="align-items-end">
                            {
                                !isQuoteAmountSearch &&
                                <>
                                    <Col xs={baseCurrencyColumnSize}>
                                        <Form.Label>Base Currency</Form.Label>
                                        <Select
                                            defaultValue={
                                                getCurrencySearchOption(props.baseCurrency)
                                            }
                                            options={baseCurrencySearchOptions}
                                            theme={currencySelectorTheme}
                                            onChange={(e) => props.onBaseCurrencyChange(e.value)}
                                        />
                                    </Col>
                                    <Col xs={arrowColumnSize} className="text-center">
                                        <Form.Label>
                                            {
                                                isBuyTransaction ?
                                                    <ArrowLeft /> :
                                                    <ArrowRight />
                                            }
                                        </Form.Label>
                                    </Col>
                                </>
                            }
                            <Col xs={quoteCurrencyColumnSize}>
                                <Form.Label>Quote Currency</Form.Label>
                                <Select
                                    defaultValue={
                                        getCurrencySearchOption(props.quoteCurrency)
                                    }
                                    options={quoteCurrencySearchOptions}
                                    theme={currencySelectorTheme}
                                    onChange={(e) => props.onQuoteCurrencyChange(e.value)}
                                />
                            </Col>
                            <Col xs={amountColumnSize}>
                                <Form.Label>
                                    { getAmountInputLabel() }
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <Icon icon={getAmountInputIcon()} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id="amountInput"
                                        value={props.amount}
                                        onChange={(e) => props.onAmountChange(e.target.value)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Row className="justify-content-center">
                                    <Form.Label className="pr-2">
                                        Buy
                                    </Form.Label>
                                    <Switch
                                        id="transactionTypeSwitch"
                                        onChange={onTransactionTypeChange}
                                        checked={!isBuyTransaction}
                                        handleDiameter={28}
                                        height={20}
                                        width={48}
                                        onColor="#E2E2E2"
                                        offColor="#E2E2E2"
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        onHandleColor="#7EEC73"
                                        offHandleColor="#7EEC73"
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                                    />
                                    <Form.Label className="pl-2">Sell</Form.Label>
                                </Form.Row>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button
                        id="searchButton"
                        className="shadow-none"
                    >
                        View Trade Options
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default SearchBox;
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import './SearchBox.css';
import {
    quoteCurrencies,
    baseCurrencies,
    searchTypes
} from './constants';

function getCurrencySearchOptions(currencies) {
    return Object.entries(currencies).map(
        ([abbreviation, name]) => ({
            value: abbreviation,
            label: `${name} (${abbreviation})`
        })
    );
}

function SearchBox(props) {
    const quoteCurrencySearchOptions = 
        getCurrencySearchOptions(quoteCurrencies);
    const baseCurrencySearchOptions = 
        getCurrencySearchOptions(baseCurrencies);

    const isBudgetSearch = props.searchType === searchTypes.BUDGET;

    const quoteCurrencyColumnSize = isBudgetSearch ? 8 : 4;
    const baseCurrencyColumnSize = 4;
    const budgetLabelColumnSize = isBudgetSearch ? 4 : 2;
    const budgetInputColumnSize = isBudgetSearch ? 2 : 2;
    const transactionTypeSwitchColumnSize = 2;

    const currencySelectorTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary25: '#CCF4C8',
            primary: '#7EEC73',
        }
    });

    return (
        <>
            <Row>
                <Col>
                    <Form id="searchBox">
                        <Form.Row>
                            <Col xs={quoteCurrencyColumnSize}>
                                <Form.Label>Quote Currency</Form.Label>
                            </Col>
                            {
                                props.searchType === searchTypes.PAIR && 
                                <Col xs={baseCurrencyColumnSize}>
                                    <Form.Label>Base Currency</Form.Label>
                                </Col>
                            }
                            <Col xs={budgetLabelColumnSize}>
                                <Form.Label>
                                    {isBudgetSearch ? "Budget" : "Base Amount"}
                                </Form.Label>
                            </Col>
                        </Form.Row>
                        <Form.Row className="align-items-center">
                            <Col xs={quoteCurrencyColumnSize}>
                                <Select
                                    defaultValue={
                                        quoteCurrencySearchOptions[0]
                                    }
                                    options={quoteCurrencySearchOptions}
                                    theme={currencySelectorTheme}
                                />
                            </Col>
                            {
                                !isBudgetSearch && 
                                <Col xs={baseCurrencyColumnSize}>
                                    <Select
                                        defaultValue={
                                            baseCurrencySearchOptions[0]
                                        }
                                        options={baseCurrencySearchOptions}
                                        theme={currencySelectorTheme}
                                    />
                                </Col>
                            }
                            <Col xs={budgetInputColumnSize}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control id="budgetInput" />
                                </InputGroup>
                            </Col>
                            <Col xs={transactionTypeSwitchColumnSize}>
                                <Form.Row className="justify-content-center">
                                    <Form.Label className="pr-2">
                                        Buy
                                    </Form.Label>
                                    <Form.Check 
                                        type="switch"
                                        id="transactionTypeSwitch"
                                        className="shadow-none"
                                    />
                                    <Form.Label>Sell</Form.Label>
                                </Form.Row>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button id="searchButton">Search</Button>
                </Col>
            </Row>
        </>
    );
}

export default SearchBox;
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { quoteCurrencies, baseCurrencies, searchTypes } from './constants';
import Select from 'react-select';
import './SearchBox.css';

function getCurrencySearchOptions(currencies) {
    return Object.entries(currencies).map(
        ([abbreviation, name]) => ({
            value: abbreviation,
            label: `${name} (${abbreviation})`
        })
    );
}

function SearchBox(props) {
    const quoteCurrencySearchOptions = getCurrencySearchOptions(quoteCurrencies);
    const baseCurrencySearchOptions = getCurrencySearchOptions(baseCurrencies);

    const isBudgetSearch = props.searchType === searchTypes.BUDGET;

    const quoteCurrencyColumnSize = isBudgetSearch ? 8 : 4;
    const baseCurrencyColumnSize = 4;
    const budgetLabelColumnSize = isBudgetSearch ? 4 : 2;
    const budgetInputColumnSize = isBudgetSearch ? 2 : 2;
    const transactionTypeSwitchColumnSize = 2;

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
                                    defaultValue={quoteCurrencySearchOptions[0]}
                                    options={quoteCurrencySearchOptions}
                                />
                            </Col>
                            {
                                !isBudgetSearch && 
                                <Col xs={baseCurrencyColumnSize}>
                                    <Select
                                        defaultValue={baseCurrencySearchOptions[0]}
                                        options={baseCurrencySearchOptions}
                                    />
                                </Col>
                            }
                            <Col xs={budgetInputColumnSize}>
                                <Form.Control placeholder="$" id="budgetInput" />
                            </Col>
                            <Col xs={transactionTypeSwitchColumnSize}>
                                <Form.Row className="justify-content-center">
                                    <Form.Label className="pr-2">Buy</Form.Label>
                                    <Form.Check 
                                        type="switch"
                                        id="transactionTypeSwitch"
                                        data-onstyle="dark"
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
                    <Button id="searchButton">GO</Button>
                </Col>
            </Row>
        </>
    );
}

export default SearchBox;
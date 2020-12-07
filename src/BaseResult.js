import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapsible from 'react-collapsible';
import { Icon } from '@iconify/react';
import { CaretDownFill } from 'react-bootstrap-icons';
import { currencies } from './constants';
import ExchangeResult from './ExchangeResult';

function BaseResult(props){
    const currency = currencies[props.base];
    const quoteSearchResultHeader = (
        <Row className="align-items-center">
            <Col>
                <span className="d-flex align-items-center">
                    <Icon icon={currency.icon} className="mr-2" />
                    {currency.name} ({props.base})
                </span>
            </Col>
            <Col xs="auto" className="mx-1">
                <CaretDownFill />
            </Col>
        </Row>
    );

    return(
        <Collapsible trigger={quoteSearchResultHeader}>
            <div style={{width:'100%'}} class="content">
                {   
                    props.results.map((result, index) => {
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
                                searchType={props.searchType}
                            />
                        );
                    })
                }
            </div>
        </Collapsible>
    );
}

export default BaseResult;
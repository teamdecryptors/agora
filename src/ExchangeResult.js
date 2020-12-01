import React, { useState, useMemo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowLeft, StarFill } from 'react-bootstrap-icons';
import { Exchanges, searchTypes } from './constants'
import './ExchangeResult.css';

function ExchangeResult(props){
    const exchange = props.exchangeName;
    const formalExchangeName = Exchanges[exchange].exchangeName;
    const url = Exchanges[exchange].link;
    const [starColor, setColor] = useState('lightgray');
    const btnColor = useMemo(() => {
        return starColor === 'lightgray' ? 'gold' : 'lightgray';
    }, [starColor]);
    const isQuoteAmountSearch = 
        props.searchType === searchTypes.QUOTE_AMOUNT;
    const resultClassesForSearchType = isQuoteAmountSearch ? 
        "result quoteAmountSearchResult" :
        "result pairSearchResult mb-2"

    const onFavoriteButtonClick = (e) => {
        e.preventDefault();
        setColor(btnColor);
    };

    return(
        <Row className={resultClassesForSearchType}>
            <Col>
                <a
                    href={ url }
                    className="resultLink mb-0"
                    target="_blank" rel="noopener noreferrer"
                >
                    <Row className="align-items-center py-2">
                        <Col className='px-2' xs="auto">
                            <img
                                src={ Exchanges[exchange].logoImage } 
                                alt={ exchange }
                                width={60}
                                height={60}
                            />
                        </Col>
                        <Col xs={2} className="px-1">
                            <Row>
                                <Col>
                                    {formalExchangeName}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {props.transactionType}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mb-0 d-flex justify-content-center align-items-baseline">
                            <span className="mb-0 amount">
                                {props.amount}
                            </span>
                            &nbsp;
                            <span className="mb-0 currency">
                                {props.baseCurrency}
                            </span>
                            <span className="mb-0 arrow align-self-center">
                                &nbsp; <ArrowLeft size={25} /> &nbsp;
                            </span>
                            <span className="mb-0 amount">
                                {props.price}
                            </span>
                            &nbsp;
                            <span className="mb-0 currency">
                                {props.quoteCurrency} 
                            </span>
                        </Col>
                        <Col xs={1} className="text-center">
                            <StarFill
                                color={starColor}
                                className="favoriteButton"
                                onClick={onFavoriteButtonClick}
                                size={25}
                            />
                        </Col>
                    </Row>
                </a>
            </Col>
        </Row>
    );
}

export default ExchangeResult;


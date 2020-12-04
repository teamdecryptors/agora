import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowLeft, StarFill, ArrowRight } from 'react-bootstrap-icons';
import { exchanges, searchTypes, transactionTypes } from './constants'
import './ExchangeResult.css';

function ExchangeResult(props) {
    const { exchangeName, link, logoImage } = 
        exchanges[props.exchange];

    const [starColor, setColor] = useState('lightgray');

    const isQuoteAmountSearch = 
        props.searchType === searchTypes.QUOTE_AMOUNT;
    const isBuyTransaction = 
        props.transactionType === transactionTypes.BUY;

    const transaction = isBuyTransaction ? "BUY" : "SELL";
    const resultClassesForSearchType = isQuoteAmountSearch ? 
        "result quoteAmountSearchResult" :
        "result pairSearchResult mb-2"

    const onFavoriteButtonClick = (e) => {
        e.preventDefault();
        setColor(starColor === 'lightgray' ? 
            'gold' : 
            'lightgray');
    };

    return(
        <Row className={resultClassesForSearchType}>
            <Col>
                <a
                    href={link}
                    className="resultLink mb-0"
                    target="_blank" rel="noopener noreferrer"
                >
                    <Row className="align-items-center py-2">
                        <Col className='pl-3 pr-2' xs="auto">
                            <img
                                src={logoImage} 
                                alt={exchangeName}
                                width={60}
                                height={60}
                            />
                        </Col>
                        <Col xs={2} className="px-1">
                            <Row>
                                <Col>
                                    {exchangeName}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {transaction}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mb-0 d-flex justify-content-end align-items-baseline">
                            <span className="mb-0 amount">
                                {props.amount}
                            </span>
                            &nbsp;
                            <span className="mb-0 currency">
                                {props.baseCurrency}
                            </span>
                            <span className="mb-0 arrow align-self-center px-3">
                                {
                                    isBuyTransaction ?
                                        <ArrowLeft size={25} /> :
                                        <ArrowRight size={25} />
                                }
                            </span>
                            <span className="mb-0 amount">
                                {props.price}
                            </span>
                            &nbsp;
                            <span className="mb-0 currency">
                                {props.quoteCurrency} 
                            </span>
                        </Col>
                        <Col xs={1}></Col>
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


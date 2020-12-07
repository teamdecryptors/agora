import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowLeft, StarFill, ArrowRight } from 'react-bootstrap-icons';
import { exchanges, searchTypes, transactionTypes } from './constants'
import './ExchangeResult.css';

function ExchangeResult(props) {
    const { exchangeName, link, logoImage } = 
        exchanges[props.exchange];

    const [starColor, setColor] = useState(props.defaultStarColor);

    const isQuoteAmountSearch = 
        props.searchType === searchTypes.QUOTE_AMOUNT;
    const isBuyTransaction = 
        props.transactionType === transactionTypes.BUY;

    const transaction = isBuyTransaction ? "BUY" : "SELL";
    const resultClassesForSearchType = isQuoteAmountSearch ? 
        "result quoteAmountSearchResult" :
        "result pairSearchResult mb-2"

    const onFavoriteButtonClick = async () => {
        let baseUrl = "https://agora.bid/api/favorites";

        if (starColor === 'lightgray') {
            setColor('gold');

            let request = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  exchange: props.exchange,
                  crypto: props.baseCurrency,
                  currency: props.quoteCurrency,
                  action: transaction
                })
            });

            let response = await request.text();

            if (response === "invalid request") {
                setColor('lightgray');
            }
        }
        else {
            setColor('lightgray');

            let request = await fetch(baseUrl, {
                method: "DELETE",
                headers: {
                    'Accept': 'text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  exchange: props.exchange,
                  crypto: props.baseCurrency,
                  currency: props.quoteCurrency,
                  action: transaction
                })
            });

            let response = await request.text();

            if (response === "invalid request") {
                setColor('gold');
            }
        }
    };

    return(
        <Row className={`align-items-center ${resultClassesForSearchType}`}>
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
                                    <span className="exchangeName">
                                        {exchangeName}
                                    </span>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="text-secondary">
                                    {transaction}
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="align-items-baseline text-center">
                                <Col className="text-right">
                                    <span className="amount mr-1">
                                        {
                                            props.amount !== null ?
                                            props.amount :
                                            ""
                                        }
                                    </span>
                                    &nbsp;
                                    <span className="currency">
                                        {props.baseCurrency}
                                    </span>
                                </Col>
                                <Col xs="auto" className="align-self-center">
                                {
                                    isBuyTransaction ?
                                        <ArrowLeft size={25} /> :
                                        <ArrowRight size={25} />
                                }
                                </Col>
                                <Col className="text-left">
                                    <span className="amount mr-1">
                                        {
                                            props.price !== null ?
                                            props.price :
                                            ""
                                        }
                                    </span>
                                    <span className="currency">
                                        {props.quoteCurrency}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </a>
            </Col>
            <Col xs={1} className="text-center mx-1">
                <StarFill
                    color={starColor}
                    className="favoriteButton"
                    onClick={onFavoriteButtonClick}
                    size={25}
                />
            </Col>
        </Row>
    );
}

export default ExchangeResult;


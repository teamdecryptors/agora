import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ExchangeResult from './ExchangeResult';
import { searchTypes } from './constants';

function FavoritesPage() {
    const [favorites, setFavorites] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getFavorites = async () => {
        let baseUrl = "https://agora.bid/api/favorites";
        let response = await fetch(baseUrl, {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        });
        let newFavorites = await response.json();

        setFavorites(newFavorites);
        setIsLoading(false);
    };

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <>
            <Row className="mt-5">
                <Col>
                    <h3>
                        Favorites
                    </h3>
                </Col>
            </Row>
            {
                isLoading &&
                <Row className="mt-2 mb-4">
                    <Col>
                        <Spinner animation="border" />
                    </Col>
                </Row>
            }
            <Row>
                <Col>
                {
                    favorites === null ?
                    <p>
                        You currently have no favorited trading options.
                    </p> : 
                    Object.entries(favorites).map(([_, favorite], index) => {
                        return (
                            <ExchangeResult
                                key={`favorite-${index}`}
                                exchange={favorite.exchange}
                                transactionType={favorite.action}
                                baseCurrency={favorite.crypto}
                                quoteCurrency={favorite.currency}
                                searchType={searchTypes.PAIR}
                            />
                        );
                    })
                }
                </Col>
            </Row>
        </>
    );
}

export default FavoritesPage;
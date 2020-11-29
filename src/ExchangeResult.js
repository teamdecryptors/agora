import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowLeft, StarFill } from 'react-bootstrap-icons';
import { Exchanges } from './constants'



function chooseLogo(exchange){
    const exchangeLogo = exchange;
    return <img src={ Exchanges[exchangeLogo].logoImage }  alt={ exchangeLogo } width={60} height={60} />;
}


function ExchangeResult(props){
    const exchange = props.exchangeName;
    const formalExchangeName = Exchanges[exchange].exchangeName;
    const logo = chooseLogo(exchange);
    const url = Exchanges[exchange].link;
    var btnColor ='';
    let [starColor, setColor] = useState('lightgray');
    if (starColor === 'lightgray'){
        btnColor = 'gold';
    }
    else{
        btnColor = 'lightgray';
    }
    return(
        <>
            <div>
                <Row style={{marginBottom:7}}  className="justify-content-center">
                <a href= { url } style={{color: 'black', textDecoration: 'none'}} target="_blank">
                    <Col className='col-1'>
                        {logo}
                    </Col>
                </a>
                    <Col className='col-2'>
                    <a href= { url } style={{color: 'black', textDecoration: 'none'}} target="_blank">
                        <Row>
                            {formalExchangeName}
                        </Row>
                        <Row>
                            {props.buyOrSell}
                        </Row>
                    </a>
                    </Col>
                    <a href= { url } style={{color: 'black', textDecoration: 'none'}} target="_blank">
                    <Col style={{marginRight:270}}>
                        <h4 style={{marginLeft:70, marginTop:15}}>{props.amount} {props.baseCurrency} <ArrowLeft/> 2940 {props.quoteCurrency}</h4>
                    </Col>
                    </a>
                    <button class="btn"><i><StarFill style={{fill: starColor}}  onClick={()=>{setColor(btnColor)}}/></i></button>
                </Row>
            </div>
        </>
    )
}

export default ExchangeResult;


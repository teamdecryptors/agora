import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowLeft, StarFill } from 'react-bootstrap-icons';
import { Exchange_URLs, Exchanges, logos } from './constants'
import Coinbase_Pro from './exchange_logos/Coinbase_Pro.png';
import Binance_US from './exchange_logos/Binance_US.png';
import Bit_Z from './exchange_logos/Bit_Z.png';
import BitBay from './exchange_logos/BitBay.png';
import Bitfinex from './exchange_logos/Bitfinex.png';
import bitFlyer from './exchange_logos/bitFlyer.png';
import Bithumb from './exchange_logos/Bithumb.png';
import BitMEX from './exchange_logos/BitMEX.jpg';
import Bitstamp from './exchange_logos/Bitstamp.png';
import Bittrex from './exchange_logos/Bittrex.png';
import CEX from './exchange_logos/CEX.png';
import CrossTower from './exchange_logos/CrossTower.png';
import Deribit from './exchange_logos/Deribit.png';
import FTX from './exchange_logos/FTX.png';
import Gate from './exchange_logos/Gate.png';
import Gemini from './exchange_logos/Gemini.png';
import HitBTC from './exchange_logos/HitBTC.png';
import Kraken from './exchange_logos/Kraken.png';
import Liquid from './exchange_logos/Liquid.png';
import OKCoin from './exchange_logos/OKCoin.png';
import Poloniex from './exchange_logos/Poloniex.png';



function chooseLogo(exchanges) {
    if (exchanges === 'Coinbase Pro'){
        return <img src={Coinbase_Pro} alt={ exchanges } width={60} height={60}/>
    }
    else if (exchanges === 'Binance US'){
        return <img src={Binance_US} alt={ exchanges } width={58} height={58}/>
    }
    else if (exchanges === 'Bit-Z'){
        return <img src={Bit_Z} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'BitBay'){
        return <img src={BitBay} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Bitfinex'){
        return <img src={Bitfinex} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'bitFlyer'){
        return <img src={bitFlyer} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Bithumb'){
        return <img src={Bithumb} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'BitMEX'){
        return <img src={BitMEX} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Bitstamp'){
        return <img src={Bitstamp} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Bittrex'){
        return <img src={Bittrex} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'CEX'){
        return <img src={CEX} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'CrossTower'){
        return <img src={CrossTower} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Deribit'){
        return <img src={Deribit} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'FTX'){
        return <img src={FTX} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Gate'){
        return <img src={Gate} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Gemini'){
        return <img src={Gemini} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'HitBTC'){
        return <img src={HitBTC} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Kraken'){
        return <img src={Kraken} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'Liquid'){
        return <img src={Liquid} alt={ exchanges } width={58} height={58}/> 
    }
    else if (exchanges === 'OKCoin'){
        return <img src={OKCoin} alt={ exchanges } width={58} height={58}/> 
    }
    else {
        return <img src={Poloniex} alt={ exchanges } width={58} height={58}/> 
    }
}


//function onFavoritedChange(parameter) {
   // if (!parameter){
       // const [btnColor, setColor] = useState('yellow');
   /* }
    else {*/

   // }
//}
//const [starColor, setColor] = useState('lightgray');

/*function onFavoritedChange(value) {
    if (!value) {
      setColor('gold');
    }
    else{
      setColor('lightgray');
    }
  }
*/

function ExchangeResult(props){
    const exchange = props.exchangeName;
    const logo_image = Exchanges[exchange];
    const logo = chooseLogo(logo_image);
    const url = Exchange_URLs[exchange];
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
                            {logo_image}
                        </Row>
                        <Row>
                            {props.buyOrSell}
                        </Row>
                    </a>
                    </Col>
                    <a href= { url } style={{color: 'black', textDecoration: 'none'}} target="_blank">
                    <Col style={{marginRight:270}}>
                        <h4 style={{marginLeft:70, marginTop:15}}>{props.amount} {props.base_currency} <ArrowLeft/> 2940 {props.quote_currency}</h4>
                    </Col>
                    </a>
                    <button class="btn"><i><StarFill style={{fill: starColor}}  onClick={()=>{setColor(btnColor)}}/></i></button>
                </Row>
            </div>
        </>
    )
}

export default ExchangeResult;


import React from 'react';
import EducationPageSection from "./EducationPageSection";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Education } from "./constants"

function EducationPage(props) {
    return (
        <container>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is cryptocurrency?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.cryptocurrency.image} description={Education.cryptocurrency.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.blockchain.image} description={Education.blockchain.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is blockchain?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a distributed ledger?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.distributedLedger.image} description={Education.distributedLedger.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.exchange.image} description={Education.exchange.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is an exchange?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is the difference between exchanges?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.exchangesDifference.image} description={Education.exchangesDifference.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.bitcoin.image} description={Education.bitcoin.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is bitcoin?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is an ICO?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.ico.image} description={Education.ico.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.mining.image} description={Education.mining.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is cryptocurrency mining?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a bid?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.bid.image} description={Education.bid.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.ask.image} description={Education.ask.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is an ask?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a depth level?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.depthLevel.image} description={Education.depthLevel.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.marketOrder.image} description={Education.marketOrder.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a market order?</h5>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a limit order?</h5>
            </Col>
            <Col className='col-9'>
                <EducationPageSection image={Education.limitOrder.image} description={Education.limitOrder.description}/>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='col-9'>
                <EducationPageSection image={Education.pairs.image} description={Education.pairs.description}/>
            </Col>
            <Col className='col-1' className="text-center">
                <h5 style={{marginTop:120}}>What is a currency pair?</h5>
            </Col>
        </Row> 
        <br/>
        </container>
    );
}

export default EducationPage;
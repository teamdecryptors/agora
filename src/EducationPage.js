import React from 'react';
import EducationPageSection from "./EducationPageSection";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Education } from "./constants";


function EducationPage(props) {
    return (
        <container>
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.cryptocurrency.image} heading={Education.cryptocurrency.heading}/>
            </Col>
            <Col className="headingLeft">
                <br/>
                <p style={{fontSize:20}}>{Education.cryptocurrency.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className="headingRight">
                <br/>
                <p style={{fontSize:20}}>{Education.blockchain.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.blockchain.image} heading={Education.blockchain.heading}/>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.distributedLedger.image} heading={Education.distributedLedger.heading}/>
            </Col>
            <Col className='headingLeft'>
                <br/>
                <p style={{fontSize:20}}>{Education.distributedLedger.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
                <br/>
                <p style={{fontSize:20}}>{Education.exchange.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.exchange.image} heading={Education.exchange.heading}/>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.exchangesDifference.image} heading={Education.exchangesDifference.heading}/>
            </Col>
            <Col className='headingLeft'>
                <br/>
                <p style={{fontSize:20}}>{Education.exchangesDifference.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
                <br/>
                <p style={{fontSize:20}}>{Education.bitcoin.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.bitcoin.image} heading={Education.bitcoin.heading}/>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.ico.image} heading={Education.ico.heading}/>
            </Col>
            <Col className='headingLeft'>
                <br/>
                <p style={{fontSize:20}}>{Education.ico.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
                <br/>
                <p style={{fontSize:20}}>{Education.mining.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.mining.image} heading={Education.mining.heading}/>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.bid.image} heading={Education.bid.heading}/>
            </Col>
            <Col className='headingLeft'>
            <br/>
                <p style={{fontSize:20}}>{Education.bid.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
            <br/>
                <p style={{fontSize:20}}>{Education.ask.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.ask.image} heading={Education.ask.heading}/> 
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.depthLevel.image} heading={Education.depthLevel.heading}/>
            </Col>
            <Col className='headingLeft'>
            <br/>
                <p style={{fontSize:20}}>{Education.depthLevel.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
            <br/>
                <p style={{fontSize:20}}>{Education.marketOrder.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.marketOrder.image} heading={Education.marketOrder.heading}/>
            </Col>
        </Row> 
        <br/>
        <Row>
            <Col className='col-1'>
                <EducationPageSection image={Education.limitOrder.image} heading={Education.limitOrder.heading}/>
            </Col>
            <Col className='headingLeft'>
            <br/>
                <p style={{fontSize:20}}>{Education.marketOrder.description}</p>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col className='headingRight'>
            <br/>
                <p style={{fontSize:20}}>{Education.pairs.description}</p>
            </Col>
            <Col className='col-1' style={{marginRight:140}}>
                <EducationPageSection image={Education.pairs.image} heading={Education.pairs.heading}/>
            </Col>
        </Row> 
        <br/>
        </container>
    );
}

export default EducationPage;
import React from 'react';
import AboutPageProfile from './AboutPageProfile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { names, roles, bios } from './constants';
import vicente_headshot from './headshots/vicente_headshot.png';
import yishai_headshot from './headshots/yishai_headshot.png';
import jason_headshot from './headshots/jason_headshot.png';
import jessica_headshot from './headshots/jessica_headshot.png';
import andrew_headshot from './headshots/andrew_headshot.png';
import juan_headshot from './headshots/juan_headshot.png';
import nick_headshot from './headshots/nick_headshot.png';
import advik_headshot from './headshots/advik_headshot.png';
import varun_headshot from './headshots/varun_headshot.png';
import mark_headshot from './headshots/mark_headshot.png';
import daniel_headshot from './headshots/daniel_headshot.png';


console.log(vicente_headshot);
console.log(yishai_headshot);
console.log(jason_headshot);
console.log(jessica_headshot);
console.log(andrew_headshot);
console.log(juan_headshot);
console.log(nick_headshot);
console.log(advik_headshot);
console.log(varun_headshot);
console.log(mark_headshot);
console.log(daniel_headshot);


function AboutPage(props) {
    return (
    <>
        <h1 style={{margin:25}}>About Us</h1>
        <Container>
        <Row>
            <Col className='col-7'>
                <div style={{backgroundColor: 'lightgray'}}>
                    <br/>
                    <h5 style={{marginLeft:20}}>Meet the DECRYTORS</h5>
                    <p style={{margin:20}}>
                     Formed through the incredible, heartfelt bonds of friendship 
                    and meeting time constraints, the Decryptors were founded 
                    on a fateful autumn day in 2020 at UCSD.</p>
                    <br/>
                </div>
                <br/>
                <Row>
                    <Col>
                        <img src={vicente_headshot} alt="Vicente" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Vicente} role={roles.PM} bio={bios.vicente_bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={names.Varun} role={roles.BA} bio={bios.varun_bio}/>
                    </Col>
                    <Col>
                        <img src={varun_headshot} alt="Varun" width={300} height={390}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={advik_headshot} alt="Advik" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Advik} role={roles.SSA} bio={bios.advik_bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={names.Nick} role={roles.SA} bio={bios.nick_bio}/>
                    </Col>
                    <Col>
                        <img src={nick_headshot} alt="Nick" width={300} height={390}/>   
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={yishai_headshot} alt="Yishai" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Yishai} role={roles.SDL} bio={bios.yishai_bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={names.Daniel} role={roles.DS} bio={bios.daniel_bio}/>
                    </Col>
                    <Col>
                        <img src={daniel_headshot} alt="Daniel" width={300} height={390}/>  
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col>
                        <img src={juan_headshot} alt="Juan" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Juan} role={roles.DS} bio={bios.juan_bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                <Col>
                    <AboutPageProfile name={names.Mark} role={roles.AS} bio={bios.mark_bio}/>
                </Col>
                <Col>
                    <img src={mark_headshot} alt="Mark" width={300} height={390}/>   
                </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={jason_headshot} alt="Jason" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Jason} role={roles.UI} bio={bios.jason_bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={names.Andrew} role={roles.UI} bio={bios.andrew_bio}/>
                    </Col>
                    <Col>
                        <img src={andrew_headshot} alt="Andrew" width={300} height={390}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={jessica_headshot} alt="Jessica" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={names.Jessica} role={roles.QA} bio={bios.jessica_bio}/>
                    </Col>
                </Row>
                <br/>
            </Col>
            <Col style={{marginLeft:40}}>
                <Row>
                    <div style={{backgroundColor:'lightgray'}}>
                    <h5 style={{margin:20}}>Our Mission</h5>
                    <p style={{margin:20}}>
                        Agora is a centralized hub for cryptocurrency. 
                        The goal of Agora is to demystify cryptocurrency 
                        and make trading easier for everyone, regardless 
                        of their level of expertise in cryptocurrency. By 
                        displaying precise and accurate prices and making 
                        it simple to reach trading platforms available, Agora 
                        is bringing transparency to cryptocurrency.
                    </p>
                    </div>
                </Row>
            </Col>
            </Row>
        </Container>
    </>
    )
}

export default AboutPage;
import React from 'react';
import AboutPageProfile from './AboutPageProfile';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { teamMembers } from './constants';


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
                        <img src={teamMembers.Vicente.headshot} alt="Vicente" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Vicente.fullName} role={teamMembers.Vicente.role} bio={teamMembers.Vicente.bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={teamMembers.Varun.fullName} role={teamMembers.Varun.role} bio={teamMembers.Varun.bio}/>
                    </Col>
                    <Col>
                        <img src={teamMembers.Varun.headshot} alt="Varun" width={300} height={390}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={teamMembers.Advik.headshot} alt="Advik" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Advik.fullName} role={teamMembers.Advik.role} bio={teamMembers.Advik.bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={teamMembers.Nick.fullName} role={teamMembers.Nick.role} bio={teamMembers.Nick.bio}/>
                    </Col>
                    <Col>
                        <img src={teamMembers.Nick.headshot} alt="Nick" width={300} height={390}/>   
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={teamMembers.Yishai.headshot} alt="Yishai" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Yishai.fullName} role={teamMembers.Yishai.role} bio={teamMembers.Yishai.bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={teamMembers.Daniel.fullName} role={teamMembers.Daniel.role} bio={teamMembers.Daniel.bio}/>
                    </Col>
                    <Col>
                        <img src={teamMembers.Daniel.headshot} alt="Daniel" width={300} height={390}/>  
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col>
                        <img src={teamMembers.Juan.headshot} alt="Juan" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Juan.fullName} role={teamMembers.Juan.role} bio={teamMembers.Juan.bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                <Col>
                    <AboutPageProfile name={teamMembers.Mark.fullName} role={teamMembers.Mark.role} bio={teamMembers.Mark.bio}/>
                </Col>
                <Col>
                    <img src={teamMembers.Mark.headshot} alt="Mark" width={300} height={390}/>   
                </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={teamMembers.Jason.headshot} alt="Jason" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Jason.fullName} role={teamMembers.Jason.role} bio={teamMembers.Jason.bio}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <AboutPageProfile name={teamMembers.Andrew.fullName} role={teamMembers.Andrew.role} bio={teamMembers.Andrew.bio}/>
                    </Col>
                    <Col>
                        <img src={teamMembers.Andrew.headshot} alt="Andrew" width={300} height={390}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img src={teamMembers.Jessica.headshot} alt="Jessica" width={300} height={390}/>
                    </Col>
                    <Col>
                        <AboutPageProfile name={teamMembers.Jessica.fullName} role={teamMembers.Jessica.role} bio={teamMembers.Jessica.bio}/>
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
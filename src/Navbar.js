import React from 'react';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { pages } from './constants';
import logo from './logo.svg';
import './Navbar.css';

function Navbar(props) {
    return (
        <BootstrapNavbar bg="dark" variant="dark" fixed="top">
            <LinkContainer to="/" key="Search" exact>
                <BootstrapNavbar.Brand>
                    <img src={logo} alt="logo" width="40" height="40"/>
                    <p className="name">a g o r a</p>
                </BootstrapNavbar.Brand>
            </LinkContainer>
            <Nav className="ml-auto">
                {
                    Object.entries(pages).map(([key, value]) => {
                        const {name, pathname} = value

                        return (
                            <LinkContainer to={pathname} key={key} exact>
                                <Nav.Link
                                    onClick={() => {props.onLinkClick(value)}}
                                    style={{ marginRight: 10 }}
                                >
                                    {name}
                                </Nav.Link>
                            </LinkContainer>
                        );
                    })
                }
            </Nav>
        </BootstrapNavbar>
    );
}

export default Navbar;

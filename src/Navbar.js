import React from 'react';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { pages } from './constants';
import logo from './logo.svg';

function Navbar(props) {
    return (
        <BootstrapNavbar bg="dark" variant="dark" fixed="top">
            <BootstrapNavbar.Brand>
                <img src={logo} alt="logo" width="40" height="40"/>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Brand>
                a g o r a
            </BootstrapNavbar.Brand>
            <Nav className="ml-auto">
                {
                    Object.entries(pages).map(([key, {name, pathname}]) => (
                        <LinkContainer to={pathname} key={key} exact>
                            <Nav.Link
                                onClick={() => {props.onLinkClick(name)}}
                            >
                                {name}
                            </Nav.Link>
                        </LinkContainer>
                    ))
                }
            </Nav>
        </BootstrapNavbar>
    );
}

export default Navbar;

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { pages } from './constants';

function Navbar(props) {
    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <BootstrapNavbar.Brand>
                agora
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
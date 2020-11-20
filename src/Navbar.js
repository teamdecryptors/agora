import React from 'react';
import { Nav } from 'react-bootstrap';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { navbarLinks } from './constants';

function Navbar(props) {
    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <BootstrapNavbar.Brand>
                agora
            </BootstrapNavbar.Brand>
            <Nav className="ml-auto">
                {
                    Object.entries(navbarLinks).map(([key, {name}]) => (
                        <Nav.Link
                            href="#" key={key} 
                            active={name === props.active} 
                            onClick={() => props.onLinkClick(key)}>
                            {name}
                        </Nav.Link>
                    ))
                }
            </Nav>
        </BootstrapNavbar>
    );
}

export default Navbar;
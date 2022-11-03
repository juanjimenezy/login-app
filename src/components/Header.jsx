import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText,
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} color="dark" dark>
                <NavbarBrand href="/" className="me-auto">Login-app</NavbarBrand>
                <NavbarToggler onClick={toggle} className="me-2"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>

                            <NavLink href="/Login">Login</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/Register">Register</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
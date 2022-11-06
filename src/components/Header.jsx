import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText// UncontrolledDropdown,// DropdownToggle,// DropdownMenu,// DropdownItem,// NavbarText
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const login = useSelector((state) => state.login);

    const toggle = () => setIsOpen(!isOpen);

    return (
        
        <div>
            <Navbar {...args} color="dark" dark>
                <NavbarBrand href="/" className="me-auto">Login-app</NavbarBrand>
                <NavbarText>Bienvenido {login[0].usuario}</NavbarText>
                <NavbarToggler onClick={toggle} className="me-2"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>

                        <NavItem>
                            <NavLink href="/Login">Login</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/Register">Register</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/Crud" disabled={login.isLogged}>Formulario</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                
            </Navbar>
        </div>
    );
}

export default Header;
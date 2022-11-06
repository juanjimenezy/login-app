import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText// UncontrolledDropdown,// DropdownToggle,// DropdownMenu,// DropdownItem
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const login = useSelector((state) => state.login);
    const toggle = () => setIsOpen(!isOpen);

    return (
        
        <div>
            <Navbar {...args} color="dark" dark>
                <NavbarBrand href="/" className="me-auto">Login-app</NavbarBrand>
                <NavbarText>Bienvenido {login.usuario}</NavbarText>
                <NavbarToggler onClick={toggle} className="me-2"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>

                        <NavItem active={false}>
                            <NavLink href="/Login" style={{display: login.isLogged===true?"none":"block"}}>Login</NavLink>
                            <NavLink href="/Register" style={{display: login.isLogged===true?"none":"block"}}>Register</NavLink>
                            <NavLink href="/Crud" style={{display: login.isLogged===false?"none":"block"}}>Formulario</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                
            </Navbar>
        </div>
    );
}

export default Header;
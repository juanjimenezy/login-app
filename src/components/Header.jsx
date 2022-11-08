import React, { useState } from 'react';
//import { useSelector } from "react-redux";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText// UncontrolledDropdown,// DropdownToggle,// DropdownMenu,// DropdownItem
} from 'reactstrap';

import {getAuth, signOut} from 'firebase/auth';

function Header(args) {

    const auth = getAuth();
    const user = auth.currentUser;
    let email = null;
    if (user !== null) {
        email = user.email;
    }

    const [isOpen, setIsOpen] = useState(false);
    //const login = useSelector((state) => state.login);
    const toggle = () => setIsOpen(!isOpen);

    const logout = () => {
        signOut(auth);
    }

    return (
        
        <div>
            <Navbar {...args} color="dark" dark>
                <NavbarBrand href="/" className="me-auto">Login-app</NavbarBrand>
                <NavbarToggler onClick={toggle} className="me-2"/>
                <Collapse isOpen={isOpen} navbar>
                
                    <Nav className="me-auto" navbar>
                    <NavbarText style={{color: 'aquamarine',textAlign: 'center'}}>Bienvenido {email}</NavbarText>
                        <NavItem active={false}>
                            <NavLink href="/Login" style={{display: email!==null?"none":"block"}}>Login</NavLink>
                            <NavLink href="/Register" style={{display: email!==null?"none":"block"}}>Register</NavLink>
                            <NavLink href="/Crud" style={{display: email===null?"none":"block"}}>Formulario</NavLink>
                            <NavLink href="/" style={{display: email===null?"none":"block", color: "indianred"}} onClick={() => logout()}>Salir</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                
            </Navbar>
        </div>
    );
}

export default Header;
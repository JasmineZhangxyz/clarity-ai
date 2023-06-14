import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from '../images/navbar-logo.png';

const NavBar = () => {
    const activeLinkStyle = {
        textDecoration: 'underline'
      };
    return (
        <Navbar style={{ backgroundColor: '#BCF8EC' }} expand="lg">
            <div className="navbar-logo">
                <img
                    src={LogoImage}
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mr-2"
                />
            </div>
            <div className="navbar-brand">
                <Navbar.Brand> 
                    <Link to="/clarity-ai" style={{ color: '#2A52BE', fontFamily: 'Archivo Black, sans-serif' }}>ClarityAI</Link>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <Link to="/info" className="nav-link" style={{ color: '#2A52BE' }} activeStyle={activeLinkStyle}>Info</Link>
                    <Link to="/feature-importance" className="nav-link" style={{ color: '#2A52BE' }} activeStyle={activeLinkStyle}>Feature Importance</Link>
                    <Link to="/attention-maps" className="nav-link" style={{ color: '#2A52BE' }} activeStyle={activeLinkStyle}>Attention Maps</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
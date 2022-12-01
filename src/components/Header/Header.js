import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='p-2'>
            <Container>
                <Navbar.Brand href="#home"><h3 className='fw-bold'>Multi <span className='vendor'>Vendor</span></h3> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto me-0 menu ">
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
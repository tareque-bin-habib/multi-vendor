import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    return (
        <Navbar bg="light" expand="lg" className='p-2'>
            <Container>
                <Navbar.Brand href="#home"><h3 className='fw-bold'>Multi <span className='vendor'>Vendor</span></h3> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto me-0 menu ">
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to='/about'>About</Link>
                        {user?.uid ?
                            <button className='log-out' onClick={logOut}>Log out</button>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </>
                        }


                        <span className='ms-2'>{user?.email}</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
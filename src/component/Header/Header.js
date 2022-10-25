import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth" className = "shadow p-3 mb-5 bg-body rounded">
      <Container>
        <Navbar.Brand > <Link to ="/course" className='navstyle'>Digital Course-BD</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className ="nav " >
        <Nav.Item>
          <Link  className ="navstyle" to="/">Courses</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className ="navstyle" to = "/faq">FAQ</Link>
        </Nav.Item>
        <Nav.Item>
          <Link  className ="navstyle"to = "/blog">Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link  className ="navstyle"to = "/login">Log in</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className ="navstyle" to = "/register">Register</Link>
        </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
    );
};

export default Header;
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth" className = "shadow p-3 mb-5 bg-body rounded">
      <Container>
        <Navbar.Brand href="#home">Digital Course-BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Courses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">FAQ</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Log in</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Register</Nav.Link>
        </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
    );
};

export default Header;
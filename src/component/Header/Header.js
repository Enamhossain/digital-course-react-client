import React, { useContext } from 'react';
import { Button, Image, Form } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




import { AuthContext } from '../../context/AuthProvider';
import './Header.css'


const Header = () => {
  const { user, logOut,  } = useContext(AuthContext);

  


  


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth" className="shadow p-3 mb-5 bg-body rounded">
        <Container>
          <Navbar.Brand > <Link to="/" className='navstyle'>Digital Course-BD</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="nav " >
              <Nav.Item>
                <Link className="navstyle" to="/">Courses</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="navstyle" to="/faq">FAQ</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="navstyle" to="/blog">Blog</Link>
              </Nav.Item>

              <Nav>
                <>
                  {
                    user?.uid ?
                      <>
                        <span>{user?.displayName}</span>
                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                      </>
                      :
                      <>
                        <Nav.Item>
                          <Link className="navstyle" to="/login">Log in</Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Link className="navstyle" to="/register">Register</Link>
                        </Nav.Item>
                      </>
                  }


                </>
                <Link to="/profile">
                  {user?.photoURL ?
                    <Image
                      style={{ height: '30px' }}
                      roundedCircle
                      src={user?.photoURL
                      }>
                    </Image>
                    : <FaUser></FaUser>
                  }
                </Link>
              </Nav>
            </Nav>
            <Form className="mx-5">
              <Form.Check 
                type="switch"
                id="custom-switch"
                label="Ligth/Dark"
              />
              
            </Form>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>

  );
};

export default Header;
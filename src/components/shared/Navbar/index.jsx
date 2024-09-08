import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#040220' }}>
        <Container fluid>
          {/* Logo on the left */}
          <Navbar.Brand href="#" className="text-white font-bold">
            <FontAwesomeIcon icon={faStore} className="me-2" />
            Power Tools
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
          
            <Form className="d-flex mx-auto" style={{ maxWidth: '400px', flexGrow: 1 }}>
              <FormControl
                type="search"
                placeholder="🔍 Search..."
                className="me-2"
                aria-label="Search"
              />
            </Form>

         
            <Nav className="ms-auto">
              <Button variant="outline-light" onClick={handleRegisterClick}>
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                REGISTER
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

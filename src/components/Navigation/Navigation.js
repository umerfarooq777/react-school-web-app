import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Escuela De Sto Rosario</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./components/AdminLogin.js">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              {/* <NavDropdown title="Programs" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Junior High School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Senior High School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="./web_pages/contactus.html">
                Contact Us
              </Nav.Link>
              <NavDropdown title="ESR Portal" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Admin Login
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Application ID
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Admission Form
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;

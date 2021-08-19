import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { MenuItem } from "@material-ui/core";
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='nav-links'>
      <Container fluid>
        <Navbar.Brand>
          <NavLink to='/'>
            <font>Escuela De Sto Rosario</font>
            <font>ESR</font>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <MenuItem>
              <NavLink to='/'>Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to='/about'>About us</NavLink>
            </MenuItem>

            <NavDropdown title="Programs" id="collasible-nav-dropdown">
              <MenuItem className='nav-dropdown'>
                <NavLink to='/junior-high-school'>Junior High School</NavLink>
              </MenuItem>
              <MenuItem className='nav-dropdown'>
                <NavLink to='/senior-high-school'>Senior High School</NavLink>
              </MenuItem>
            </NavDropdown>
          </Nav>

          <Nav>
            <MenuItem>
              <NavLink to='/contact'>Contact-us</NavLink>
            </MenuItem>
            <NavDropdown title="ESR Portal" id="collasible-nav-dropdown">
              <MenuItem className='nav-dropdown'>
                <NavLink to='/admin'>Admin Login</NavLink>
              </MenuItem>
              <MenuItem className='nav-dropdown'>
                <NavLink to='/application-id'>Application ID</NavLink>
              </MenuItem>
              <MenuItem className='nav-dropdown'>
                <NavLink to='/admission'>Admission</NavLink>
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

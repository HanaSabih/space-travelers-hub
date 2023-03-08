import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarPg = () => (
  <Container>
    <Navbar bg="light" expand="xl" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src=""
            width="50"
            height="30"
            className="d-inline-block align-top me-3"
            alt="Space Travelers' Hub"
          />
          Space Travelers Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-xl"
          aria-labelledby="offcanvasNavbar-expand-xl"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbar-expand-xl">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Rockets">Rockets</Nav.Link>
              <Nav.Link href="/Missions">Missions</Nav.Link>
              <Nav.Link href="/MyProfile">MyProfile</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    <Outlet />
  </Container>
);

export default NavbarPg;

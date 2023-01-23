import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function NavbarFunc() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/" style={{marginLeft:"100px"}}>My Kitchen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/createrec" style={{marginLeft:"100px"}}>Create Recipe</Nav.Link>
          <Nav.Link href="/createing" style={{marginLeft:"100px"}}>Create Ingredient</Nav.Link>
          <Nav.Link href="/rec" style={{marginLeft:"100px"}}>Recipes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}
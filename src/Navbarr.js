import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Education</Nav.Link>
          <Nav.Link href="#pricing">Work</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

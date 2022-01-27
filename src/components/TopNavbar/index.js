import React from "react";

import { Button, Dropdown, Nav, Navbar, SplitButton } from "react-bootstrap";

export default function TopNavbar() {
  return (
    <Navbar className="px-3" variant="dark" bg="dark" expand="sm" sticky="top">
      <Navbar.Brand href="#">Frontend Bootcamp</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="#learn">What you'll learn</Nav.Link>
          <Nav.Link href="#instructors">Instructors</Nav.Link>
          <Nav.Link href="#questions">FAQ</Nav.Link>
        </Nav>
        <Button variant="dark">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

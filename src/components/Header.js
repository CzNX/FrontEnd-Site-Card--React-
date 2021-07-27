import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/mushoor-icon.png";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar text-center" variant="dark">
      <Navbar.Brand href="#home" id="home">
        <span>Mushoor</span>
        <img
          src={logo}
          className="d-inline-block align-top ml-2"
          alt="Mushoor-logo"
          width="30"
          height="30"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">
            <Button className="about" size="sm" style={{ color: "#000" }}>
              About
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../../static/img/logo.png";
import "./CityHeader.css";

function CityHeader() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="flex-lg-column align-items-lg-start CityHeader"
    >
      <Navbar.Brand>
        <NavLink to="/">
          <img src={logo} className="CityHeader-logo" alt="logo" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto flex-lg-column align-items-end align-items-lg-start">
          <Nav.Link>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/map">Map</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/city">City</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CityHeader;

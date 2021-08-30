import React, { Component } from "react";
import { Container,Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/favCoffe">FavCoffe</Link>
              
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;

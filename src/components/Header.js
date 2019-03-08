import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderStyles from "./styles/HeaderStyles";

class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <Link className="links" to="/">
          Home
        </Link>

        <Link className="links" to="/about">
          About
        </Link>

        <Link className="links" to="/projects">
          Projects
        </Link>

        <Link className="links" to="/contact">
          Contact
        </Link>

        <Link className="links" to="/resume">
          Resume
        </Link>
      </HeaderStyles>
    );
  }
}

export default Header;

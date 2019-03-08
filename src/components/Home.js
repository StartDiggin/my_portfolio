import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../css/styleSheets.css";
import HomePage from "./styles/HomeStyles";

const Git = styled.h1`
  display: inline-block;
  margin: 25px;
  a {
    color: white;
  }
`;

const Linked = styled.h1`
  display: inline-block;
  transition: left ease 0.5s;
  a {
    color: #0077b5;
    &:hover {
      left: -10px;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <HomePage>
        <div className="title">
          <h1>Johnny Gonzales</h1>
          <h2>Frontend Developer</h2>
        </div>
        <nav>
          <div className="nav">
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
          </div>
        </nav>
        <div>
          <Git>
            <a
              href="https://github.com/StartDiggin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" />
            </a>
          </Git>
          <Linked>
            <a
              href="https://www.linkedin.com/in/dean97/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
          </Linked>
        </div>
      </HomePage>
    );
  }
}

export default Home;

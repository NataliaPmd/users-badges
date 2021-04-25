import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Navbar.css";
import logo from "../images/unicorn.svg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Team</span>
            <span className="font-weight-bold">Members</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;

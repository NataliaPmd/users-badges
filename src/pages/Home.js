import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Home.css";
import home from "../images/home.svg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__img">
          <img src={home} alt="Page not found" />
        </div>
        <div className="Badges__buttons">
          <Link to="/badges" className="btn btn-info">
            Team Members
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/NotFound.css";
import error from "../images/404.svg";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <div className="notFound__img">
          <img src={error} alt="Page not found" />
        </div>
      </div>
    );
  }
}
export default NotFound;

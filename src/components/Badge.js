import React from "react";
import logo from "../images/unicorn_simple.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img
            className="Badge__header-img"
            src={logo}
            alt="Logo de la conferencia"
          />
          <span className="font-weight-light">Team</span>
          <span className="font-weight-bold">Member</span>
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>{twitter}</div>
        </div>

        <div className="Badge__footer">#Badges</div>
      </div>
    );
  }
}

export default Badge;

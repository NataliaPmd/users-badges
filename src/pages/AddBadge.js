import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/AddBadge.css";
import header from "../images/home.svg";
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from "../components/PageLoading.js";
import api from "../api";

class AddBadge extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      twitter: "",
      jobTitle: "",
      avatarUrl: "",
    },
  };
  getAvatarUrl = () => {
    return `https://avatars.dicebear.com/api/bottts/${this.state.form.firstName}${this.state.form.lastName}.svg`;
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading></PageLoading>;
    }
    if (this.state.error) {
      return `error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-img"
            src={header}
            alt="Logo1"
          />
          <h1>Join us!</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                twitter={this.state.form.twitter || "@twitter"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                avatarUrl={this.getAvatarUrl()}
              />
            </div>
            <div className="col-6">
              <h1>New Team Member</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddBadge;

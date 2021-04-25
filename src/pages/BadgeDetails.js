import React from "react";

import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/home.svg";
import PageLoading from "../components/PageLoading";
import Badge from "../components/Badge";
import DeleteBadge from "../components/DeleteBadge";

import api from "../api";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    isOpenModal: false,
  };

  getAvatarUrl = () => {
    return `https://avatars.dicebear.com/api/bottts/${this.state.data.firstName}${this.state.data.lastName}.svg`;
  };

  closeModal = (e) => {
    this.setState({ isOpenModal: false });
  };

  openModal = (e) => {
    this.setState({ isOpenModal: true });
  };

  deleteBadge = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return `error: ${this.state.error.message}`;
    }

    const badge = this.state.data;

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src={confLogo}
                  className="BadgeNew__hero-img"
                  alt="Logo de la Conferencia"
                />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
                avatarUrl={this.getAvatarUrl()}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button onClick={this.openModal} className="btn btn-danger">
                    Delete
                  </button>
                  <DeleteBadge
                    isOpen={this.state.isOpenModal}
                    onClose={this.closeModal}
                    onDelete={this.deleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDetails;

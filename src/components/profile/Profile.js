import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Wall.css";
import { Header } from 'semantic-ui-react';

const Profile = props => {
  const { profile } = props;

  return (
    <div className="Wall">
      <Header>
        {profile.firstName} {profile.lastName}
      </Header>
      <div className="" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "boards" }])
)(Profile);

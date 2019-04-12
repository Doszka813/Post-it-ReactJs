import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Wall.css";

const Profile = props => {
  const { profile } = props;

  return (
    <div className="Wall">
      <h2>
        {profile.firstName} {profile.lastName}
      </h2>
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

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Profile.css";
import { Header, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const Profile = props => {
  const { profile, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="ProfileInfo">
      <Header color="blue">
        {profile.firstName} {profile.lastName}
      </Header>
      <Divider section />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users" }])
)(Profile);

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Profile.css";
import { Header, Divider } from "semantic-ui-react";
import ImageLoader from "./ImageLoader";

const Profile = props => {
  const { profile } = props;

  const fileUploadHandler = (file) => {

  };

  return (
    <div className="ProfileInfo">
      <Header color="blue">
        {profile.firstName} {profile.lastName}
      </Header>
      <Divider section />
      <ImageLoader
        fileUploadHandler={fileUploadHandler}
      />
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
  firestoreConnect([{ collection: "users" }])
)(Profile);

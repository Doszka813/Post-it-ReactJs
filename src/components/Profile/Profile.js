import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Profile.css";
import { Header, Divider } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import Statistics from "./Statistics";

const Profile = props => {
  const { profile, auth, boards } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="ProfileInfo">
      <Header as='h2' color="blue">
        {profile.firstName} {profile.lastName}
      </Header>
      <Divider section />
      <Header as='h3'>Your stats:</Header>
      <Statistics boards={boards}/>
    </div>
  );
};

const mapStateToProps = state => {
  const userId = state.firebase.auth.uid;
  const brds =
    state.firestore.ordered.boards &&
    state.firestore.ordered.boards.filter(board => board.authorId === userId);
  return {
    boards: brds,
    profile: state.firebase.profile,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "users" },
    { collection: "boards", orderBy: ["createdAt", "desc"] }
  ])
)(Profile);

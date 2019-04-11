import React from "react";

import { addNewBoard, deleteBoard } from "../../actions/board-actions";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/Wall.css";

const Profile = (props) => {

  const { profile } = props;


  return (
    <div className="Wall">
        {profile.firstName}
        {profile.lastName}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addBoard: board => {
      dispatch(addNewBoard(board));
    },
    deleteBoard: id => {
      dispatch(deleteBoard(id));
    }
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.firebase.profile
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: 'boards' }])
)(Profile);

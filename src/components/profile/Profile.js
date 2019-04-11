import React from "react";
import Board from "../Board/Board";
import BoardCreator from "../Board/BoardCreator";

import { addNewBoard, deleteBoard } from "../../actions/board-actions";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from 'react-router-dom';
import { Button, Icon, Modal, Tab, Menu, Label } from "semantic-ui-react";
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

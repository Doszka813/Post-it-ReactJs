import React from "react";
import { addNewBoard, deleteBoard } from "../../actions/board-actions";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import "../../styles/Wall.css";
import AddBoard from "./AddBoard";
import BoardContainer from "./BoardContainer";

const Wall = props => {
  const { boards, auth } = props;

  const addBoard = board => {
    props.addBoard(board);
  };

  const deleteBoard = id => {
    props.deleteBoard(id);
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="Wall">
      <AddBoard addBoard={addBoard} />
      <BoardContainer deleteBoard={deleteBoard} boards={boards} />
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
  const userId = state.firebase.auth.uid;
  const brds =
    state.firestore.ordered.boards &&
    state.firestore.ordered.boards.filter(board => board.authorId === userId);
  return {
    boards: brds,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "boards", orderBy: ["createdAt", "desc"] },
  ])
)(Wall);

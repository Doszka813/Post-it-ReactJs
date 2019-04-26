import React from "react";
import Board from "../Board/Board";
import BoardCreator from "../Board/BoardCreator";
import { addNewBoard, deleteBoard } from "../../actions/board-actions";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { Button, Icon, Modal, Tab, Menu, Label } from "semantic-ui-react";
import "../../styles/Wall.css";

const Wall = props => {
  const { boards, auth, notifications } = props;

  const panes =
    boards &&
    boards.map(board => ({
      menuItem: (
        <Menu.Item key={board.id}>
          {board.name}
          <Label circular color="blue">
            {board.notes.length}
          </Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <Board {...board} key={board.id} deleteBoard={deleteBoard} />
        </Tab.Pane>
      )
    }));

  const addBoard = board => {
    props.addBoard(board);
  };

  const deleteBoard = id => {
    props.deleteBoard(id);
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="Wall">
      <div className="WallNav">
        <Modal
          trigger={
            <Button primary size="small">
              <Icon name="add" />
              Add Board
            </Button>
          }
          size="tiny"
          centered={false}
          dimmer="blurring"
        >
          <BoardCreator addBoard={addBoard} />
        </Modal>
      </div>
      <div className="BoardsContainer">
        {boards && boards.length < 1 ? (
          <h2>No boards to show. Please create board to continue fun!</h2>
        ) : (
          <div>
            <Tab
              menu={{ secondary: true, pointing: true, className: "Wrapped" }}
              panes={panes}
            />
          </div>
        )}
      </div>
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
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Wall);

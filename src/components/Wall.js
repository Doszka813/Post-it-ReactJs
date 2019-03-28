import React from "react";
import Board from "./Board";
import BoardCreator from "./BoardCreator";

import { Button, Icon, Modal, Tab } from "semantic-ui-react";

import { connect } from "react-redux";
import "../styles/Wall.css";

const Wall = (props) => {
  const addBoard = board => {
    props.addBoard(board);
  };

  const deleteBoard = id => {
    props.deleteBoard(id);
  };

  const panes =
    props.boards &&
    props.boards.map(board => ({
      menuItem: board.name,
      render: () => (
        <Tab.Pane>
          <Board id={board.id} key={board.id} deleteBoard={deleteBoard} />
        </Tab.Pane>
      )
    }));

  return (
    <div className="Wall">
      <Modal
        trigger={
          <Button primary>
            <Icon name="add" />
            Add Board
          </Button>
        }
        size="small"
        centered={false}
      >
        <BoardCreator addBoard={addBoard} />
      </Modal>
      {props.boards.length < 1 ? (
        <h2>No boards to show. Please create board to continue fun!</h2>
      ) : (
        <Tab panes={panes} />
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addBoard: board => {
      dispatch({ type: "ADD_BOARD", board });
    },
    deleteBoard: id => {
      dispatch({ type: "DELETE_BOARD", id });
    }
  };
};
const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wall);

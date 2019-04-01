import React from "react";
import Board from "./Board";
import BoardCreator from "./BoardCreator";

import { Button, Icon, Modal, Tab, Menu, Label } from "semantic-ui-react";

import { connect } from "react-redux";
import "../styles/Wall.css";

const Wall = props => {
  const addBoard = board => {
    console.log("cl");
    props.addBoard(board);
  };

  const deleteBoard = id => {
    props.deleteBoard(id);
  };

  const panes =
    props.boards &&
    props.boards.map(board => ({
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
          <Board id={board.id} key={board.id} deleteBoard={deleteBoard} />
        </Tab.Pane>
      )
    }));

  return (
    <div className="Wall">
      <div className="WallNav">
        <Modal
          trigger={
            <Button primary>
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
      <div className="TabContainer">
        {props.boards.length < 1 ? (
          <h2>No boards to show. Please create board to continue fun!</h2>
        ) : (
          <Tab menu={{ secondary: true, pointing: true, className: "Wrapped" }} panes={panes} />
        )}
      </div>
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

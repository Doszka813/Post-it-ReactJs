import React from "react";
import { Tab, Menu, Label } from "semantic-ui-react";
import Board from "../Board/Board";

const BoardContainer = props => {
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
          <Board {...board} key={board.id} deleteBoard={props.deleteBoard} />
        </Tab.Pane>
      )
    }));
  return (
    <div className="BoardsContainer">
      {props.boards && props.boards.length < 1 ? (
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
  );
};

export default BoardContainer;

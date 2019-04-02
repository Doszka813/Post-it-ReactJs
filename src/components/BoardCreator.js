import React, { Component } from "react";

import BoardForm from "./BoardForm";

import { Header, Modal } from "semantic-ui-react";
import "../styles/Creator.css";

class BoardCreator extends Component {
    constructor(props) {
        super();
        this.state = {
          board: {
            id: new Date().getTime(),
            name: "",
            notes: []
          }
        };
      }

  changeBoardName = e => {
    const board = this.state.board;
    board.name = e.target.value;
    this.setState({ board });
  };

  onAddBoard = (e) => {
    e.preventDefault();
    const board = {...this.state.board};
    this.props.addBoard(board);
  };

  render() {
    return (
      <div className="Creator">
        <Header icon="add" content="Add new board" />
        <Modal.Content>
          <BoardForm
            changeBoardName={this.changeBoardName}
            onAddBoard={this.onAddBoard}
          />
        </Modal.Content>
        <br />
      </div>
    );
  }
};

export default BoardCreator;
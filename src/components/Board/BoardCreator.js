import React, { Component } from "react";

import BoardForm from "./BoardForm";

import { Header, Modal } from "semantic-ui-react";
import "../../styles/Creator.css";

class BoardCreator extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      notes: []
    };
  }

  changeBoardName = e => {
    this.setState({ name: e.target.value });
  };

  onAddBoard = e => {
    e.preventDefault();
    this.props.addBoard(this.state);
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
}

export default BoardCreator;

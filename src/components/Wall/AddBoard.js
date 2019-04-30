import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import BoardCreator from "../Board/BoardCreator";

export default class AddBoard extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    return (
      <div className="WallNav">
        <Modal
          trigger={
            <Button onClick={this.handleShowClick} primary size="small">
              <Icon name="add" />
              Add Board
            </Button>
          }
          open={this.state.visible}
          size="tiny"
          centered={false}
          dimmer="blurring"
        >
          <BoardCreator
            handleClose={this.handleHideClick}
            addBoard={this.props.addBoard}
          />
        </Modal>
      </div>
    );
  }
}

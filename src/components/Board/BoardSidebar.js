import React, { Component } from "react";
import { Button, Icon, Menu, Sidebar, Modal } from "semantic-ui-react";
import NoteCreator from "../Note/NoteCreator";

export default class SidebarExampleSidebar extends Component {
  state = { barVisible: false, modalVisible: false };

  handleHideClick = () => this.setState({ barVisible: false });
  handleSidebarShowClick = () => this.setState({ barVisible: true });
  handleSidebarHide = () => this.setState({ barVisible: false });

  handleModalShowClick = () => this.setState({ modalVisible: true });
  handleModalHideClick = () => this.setState({ modalVisible: false });

  render() {
    return (
      <div>
        <Button
          circular
          floated="right"
          disabled={this.state.barVisible}
          onClick={this.handleSidebarShowClick}
          basic
          color="blue"
          animated
        >
          <Button.Content visible>
            <Icon name="angle right" color="blue" />
          </Button.Content>
          <Button.Content hidden>Options</Button.Content>
        </Button>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={this.state.barVisible}
        >
          <Menu.Item as="a">
            <Button
              fluid
              size="small"
              primary
              onClick={this.props.onDeleteBoard}
            >
              <Icon name="remove circle" />
              Delete board
            </Button>
          </Menu.Item>
          <Menu.Item as="a">
            <Button
              fluid
              size="small"
              primary
              onClick={this.props.deleteAllNotes}
            >
              <Icon name="delete" />
              Remove notes
            </Button>
          </Menu.Item>
          <Menu.Item as="a">
            <Button
              fluid
              size="small"
              primary
              onClick={this.props.deleteAllDoneNotes}
            >
              <Icon name="delete" />
              Remove done notes
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Modal
              trigger={
                <Button
                  fluid
                  size="small"
                  primary
                  onClick={this.handleModalShowClick}
                >
                  <Icon name="plus circle" />
                  Add Note{" "}
                </Button>
              }
              open={this.state.modalVisible}
              size="tiny"
              centered={false}
              dimmer="blurring"
            >
              <NoteCreator
                handleClose={this.handleModalHideClick}
                addNote={this.props.addNote}
              />
            </Modal>
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

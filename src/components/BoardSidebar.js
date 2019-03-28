import React, { Component } from "react";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

export default class SidebarExampleSidebar extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Button
          color="blue"
          circular
          floated="left"
          disabled={visible}
          onClick={this.handleShowClick}
        >
          <Icon name="angle left" />
        </Button>

        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
        //   width="thin"
        >
          <Menu.Item as="a">
            <Button primary onClick={this.props.onDeleteBoard}>
              <Icon name="remove circle" />
              Delete board
            </Button>
          </Menu.Item>
          <Menu.Item as="a">
            <Button primary onClick={this.props.deleteAllNotes}>
              <Icon name="delete" />
              Remove notes
            </Button>
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

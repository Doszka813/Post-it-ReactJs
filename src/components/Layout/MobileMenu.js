import React, { Component } from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../styles/Navigation.css";
import LogoutButton from "./LogoutButton";

export default class MobileMenu extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Icon
          name="bars"
          color="blue"
          className="menuFixed"
          size="large"
          floated="left"
          disabled={visible}
          onClick={this.handleShowClick}
        />
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={this.handleSidebarHide}
          vertical
          inverted
          visible={visible}
          className="menuSide"
        >
          <Menu.Item>
            <Link to="/">
              <Icon name="home" />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="wall">
              <Icon name="table" />
              Wall
            </Link>
          </Menu.Item>
          {this.props.links}
        </Sidebar>
      </div>
    );
  }
}

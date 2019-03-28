import React from "react";
import { Link } from "react-router-dom";

import { Icon, Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu inverted>
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
    </Menu>
  );
};

export default Navigation;

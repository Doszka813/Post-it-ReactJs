import React from "react";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import { Icon, Menu } from "semantic-ui-react";

const SignedInLinks = () => {
  return (
    <Menu.Item position="right">
      <NavLink to="/signin">
        <Button size="big" color="green" inverted>
          <Icon name="user outline" />
          Log in
        </Button>
      </NavLink>
    </Menu.Item>
  );
};

export default SignedInLinks;

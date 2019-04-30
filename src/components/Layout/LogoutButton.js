import React from "react";

import { Icon, Button } from "semantic-ui-react";
import "../../styles/Navigation.css";

const LogoutButton = props => {
  return (
    <Button onClick={props.signOut} size="small" color="green" inverted>
      <Icon name="power off" />
      Log Out
    </Button>
  );
};

export default LogoutButton;

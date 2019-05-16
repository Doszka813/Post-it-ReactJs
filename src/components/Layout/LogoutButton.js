import React from "react";

import { Button, Responsive } from "semantic-ui-react";
import "../../styles/Navigation.css";

const LogoutButton = props => {
  return (
    <div>
      <Responsive maxWidth={768}>
        <Button
          onClick={props.signOut}
          size="small"
          color="green"
          circular
          icon="power off"
        />
      </Responsive>
      <Responsive minWidth={769}>
        <Button
          onClick={props.signOut}
          size="huge"
          icon="power off"
          inverted
          color="green"
        />
      </Responsive>
    </div>
  );
};

export default LogoutButton;

import React from "react";
import { Button, Label } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ProfileButton = props => {
  return (
    <Button basic>
      <NavLink to="/profile">
        <Label image size="large">
          <img
            alt="profile_picture"
            src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
          />
          {props.profile.initials}
        </Label>
      </NavLink>
    </Button>
  );
};

export default ProfileButton;

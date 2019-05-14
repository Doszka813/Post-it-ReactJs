import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth-actions";
import { Responsive, Label, Menu, Button } from "semantic-ui-react";
import LogoutButton from "./LogoutButton";

const SignedInLinks = props => {
  const { profile } = props;

  const onSignOut = () => {
    props.signOut();
  };

  return (
    <Menu.Menu position="right">
      <Responsive minWidth={769}>
        <Menu.Item>
          <Button.Group>
            <Button>
              <NavLink to="/profile">
                <Label as="a" image size="large">
                  <img
                    alt="profile_picture"
                    src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                  />
                  {profile.initials}
                </Label>
              </NavLink>
            </Button>
            <LogoutButton signOut={onSignOut} />
          </Button.Group>
        </Menu.Item>
      </Responsive>
      <Responsive maxWidth={768}>
        <Menu.Item>
          <NavLink to="/profile">
            <Label as="a" image>
              <img
                alt="profile_picture"
                src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
              />
              {profile.initials}
            </Label>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <LogoutButton signOut={onSignOut} />
        </Menu.Item>
      </Responsive>
    </Menu.Menu>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

const mapStateToProps = state => {
  console.log(state.firestore);
  return {
    profile: state.firebase.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);

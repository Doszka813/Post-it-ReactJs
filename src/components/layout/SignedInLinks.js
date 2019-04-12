import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth-actions";

import { Icon, Menu, Button, Label } from "semantic-ui-react";

const SignedInLinks = props => {
  const { profile } = props;

  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <NavLink to="/profile">
          <Label circular color="black" size="huge">
            {profile.initials}
          </Label>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="logOuBtn"
          onClick={props.signOut}
          size="big"
          color="green"
          inverted
        >
          <Icon name="power off" />
          Log Out
        </Button>
      </Menu.Item>
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

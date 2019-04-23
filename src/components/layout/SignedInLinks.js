import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/auth-actions";
import { Redirect } from 'react-router-dom';

import { Icon, Menu, Button } from "semantic-ui-react";

const SignedInLinks = props => {
  const { profile } = props;

  const onSignOut = () => {
    props.signOut();
    return <Redirect to="/" />;
  }
  
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <NavLink to="/profile">
          <Icon circular name="user" />
          {profile.initials}
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="logOuBtn"
          onClick={onSignOut}
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

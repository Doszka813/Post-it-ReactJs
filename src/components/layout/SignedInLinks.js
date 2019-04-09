import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../actions/auth-actions';

import { Icon, Menu, Button, MenuItem, MenuMenu } from "semantic-ui-react";

const SignedInLinks = (props) => {
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <NavLink to="/">
          <Icon name="user circle" />
          Profile
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button className="logOuBtn" onClick={props.signOut} size="big" color="green" inverted>
          <Icon name="power off" />
            Log Out
        </Button>
      </Menu.Item>
    </Menu.Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);

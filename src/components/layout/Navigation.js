import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

import { Icon, Menu } from "semantic-ui-react";

const Navigation = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <Menu size='huge'>
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
        { links }
    </Menu>
  );
};

const MapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(MapStateToProps)(Navigation);

import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import MobileMenu from "./MobileMenu";
import { connect } from "react-redux";

import { Icon, Menu, Responsive } from "semantic-ui-react";
import "../../styles/Navigation.css";

const Navigation = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <div className="Navigation">
      <Responsive minWidth={769}>
        <Menu size="small">
          <Menu.Item>
            <Link to="/">
              <Icon name="home" />
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="wall">
              <Icon name="clipboard outline" />
              Wall
            </Link>
          </Menu.Item>
          {links}
        </Menu>{" "}
      </Responsive>
      <Responsive maxWidth={768}>
        <Menu size="mini" className="MobileMenu">
          <Menu.Item>
            <MobileMenu links={links} />
          </Menu.Item>
        </Menu>
      </Responsive>
    </div>

  );
};

const MapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(MapStateToProps)(Navigation);

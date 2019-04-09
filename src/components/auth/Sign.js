import React from "react";
import { Divider, Container, Grid, Segment } from "semantic-ui-react";
import "../../styles/Sign.css";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Sign = () => {
  return (
    <Container className="Sign">
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable verticalAlign="middle">
          <Grid.Column>
            <SignIn />
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <SignUp />
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Container>
  );
};

export default Sign;

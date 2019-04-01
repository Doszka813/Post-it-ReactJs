import React, { Component } from "react";

import { Form, Button, Container } from "semantic-ui-react";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container className="SignIn">
        <Form onSubmit={this.signIn}>
          <h2>Sign In</h2>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </Form.Field>
          <Button size="big" color="green" inverted>
            Sign In
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;

import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { Form, Button, Container } from "semantic-ui-react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      signUpMode: false
    };
  }

  toggleSignUp = () => {
    this.setState({
      signUpMode: !this.signUpMode
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/');
  };

  render() {
    if (this.state.signUpMode) {
      return (
        <Container className="Sign">
          <Form onSubmit={this.signIn}>
            <h2>Sign Up</h2>
            <Form.Field>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button size="big" color="green" inverted>
              Sign Up
            </Button>
          </Form>
        </Container>
      );
    } else {
      return (
        <Button
          onClick={this.toggleSignUp}
          content="Sign up"
          icon="signup"
          size="big"
        />
      );
    }
  }
}

export default withRouter(SignUp);

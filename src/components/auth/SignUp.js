import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/auth-actions";

import { Form, Button, Container } from "semantic-ui-react";
import "../../styles/Error.css";

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
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;

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
            <div className="Error">
              {authError ? <p> {authError}</p> : null}
            </div>
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

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Form, Button, Container } from "semantic-ui-react";
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth-actions';

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
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to="/" />

    return (
      <Container className="SignIn">
        <Form size='large' onSubmit={this.signIn}>
          <h2>Sign In</h2>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.signIn} size="small" color="green" inverted>
            Sign In
          </Button>
          <br/>
          <div className="Error">
            {authError ? <p color="red"> {authError} </p> : null}
          </div>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authLoginError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

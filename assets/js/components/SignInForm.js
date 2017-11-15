'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';

class SignInForm extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.errors).length) {
      switch (Object.keys(nextProps.errors)[0]) {
        case 'login':
          if (this.login)
            this.login.focus();
          break;
        case 'password':
          if (this.password)
            this.password.focus();
          break;
      }
    }
  }

  render() {
    return (
      <Form>
        <FormMessages messages={this.props.messages} />
        <FormGroup row>
          <Label for="signInLogin" sm={4} className="text-sm-right">
            Login:
            <RequiredFieldLabel />
          </Label>
          <Col sm={8}>
            <Input
              type="text"
              name="login"
              id="signInLogin"
              disabled={this.props.isLocked}
              autoFocus
              valid={(!this.props.errors.login || !Object.keys(this.props.errors.login).length) && undefined}
              onChange={this.props.onChange}
              innerRef={(input) => { this.login = input; }}
            />
            <FieldErrors errors={this.props.errors.login} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="signInPassword" sm={4} className="text-sm-right">
            Password:
            <RequiredFieldLabel />
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              name="password"
              id="signInPassword"
              disabled={this.props.isLocked}
              valid={(!this.props.errors.password || !Object.keys(this.props.errors.password).length) && undefined}
              onChange={this.props.onChange}
              innerRef={(input) => { this.password = input; }}
            />
            <FieldErrors errors={this.props.errors.password} />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

SignInForm.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignInForm;

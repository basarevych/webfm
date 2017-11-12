'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';

const SignInForm = () => (
  <Form>
    <FormGroup row>
      <Label for="signInLogin" sm={4} className="text-right">
        Login:
        <RequiredFieldLabel />
      </Label>
      <Col sm={8}>
        <Input type="text" name="login" id="signInLogin" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="signInPassword" sm={4} className="text-right">
        Password:
        <RequiredFieldLabel />
      </Label>
      <Col sm={8}>
        <Input type="password" name="password" id="signInPassword" />
      </Col>
    </FormGroup>
  </Form>
);

SignInForm.propTypes = {
};

export default SignInForm;

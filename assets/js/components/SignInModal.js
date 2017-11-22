'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked)
      return;

    this.props.onInput({ [event.target.name]: event.target.value });
  }

  handleKeyPress(event) {
    if (this.props.isLocked || event.charCode !== 13) // enter
      return;

    switch (event.target.name) {
      case 'login':
        if (this.passwordInput)
          setTimeout(() => this.passwordInput.focus(), 0);
        break;
      case 'password':
        this.handleSubmit();
        break;
    }
  }

  handleFocus() {
    if (this.props.isLocked)
      return;

    this.setState({ ignoreBlur: false });
  }

  handleBlur(event) {
    if (this.props.isLocked || this.state.ignoreBlur)
      return;

    let submittedAt = Date.now();
    let field = event.target.name;

    setTimeout(
      () => {
        if (this.props.isLocked || this.state.ignoreBlur)
          return;

        this.props.onSubmit(submittedAt, field);
      },
      250
    );
  }

  handleSubmit() {
    if (this.props.isLocked)
      return;

    this.setState({ ignoreBlur: true });
    this.props.onSubmit(Date.now());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked)
        return;

      for (let key of Object.keys(nextProps.errors)) {
        if (!Object.keys(nextProps.errors[key]).length)
          continue;

        switch (key) {
          case 'login':
            if (this.loginInput)
              setTimeout(() => this.loginInput.focus(), 0);
            break;
          case 'password':
            if (this.passwordInput)
              setTimeout(() => this.passwordInput.focus(), 0);
            break;
        }
        break;
      }
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.onToggle}
        autoFocus={true}
        backdrop="static"
        fade={true}
      >
        <ModalHeader toggle={this.props.onToggle}>Sign In</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="signInLogin" sm={4} className="text-sm-right">
                {__('login_label')}
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
                  value={this.props.values.login}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.loginInput = input; }}
                />
                <FieldErrors errors={this.props.errors.login} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signInPassword" sm={4} className="text-sm-right">
                {__('password_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="signInPassword"
                  disabled={this.props.isLocked}
                  valid={(!this.props.errors.password || !Object.keys(this.props.errors.password).length) && undefined}
                  value={this.props.values.password}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.passwordInput = input; }}
                />
                <FieldErrors errors={this.props.errors.password} />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" disabled={this.props.isLocked} onClick={this.props.onToggle}>
            {__('cancel_button')}
          </Button>
          &nbsp;
          <Button color="primary" disabled={this.props.isLocked} onClick={this.handleSubmit}>
            {__('submit_button')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInModal;

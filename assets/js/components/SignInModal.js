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

    this.state = { login: '', password: '', ignoreBlur: true };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    if (this.props.isLocked)
      return;

    this.setState({ [event.target.name]: event.target.value });
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

    let startedAt = Date.now();
    let field = event.target.name;

    setTimeout(
      () => {
        if (this.props.isLocked || this.state.ignoreBlur)
          return;

        this.props.onSubmit(
          {
            login: this.state.login,
            password: this.state.password,
          },
          field,
          startedAt
        );
      },
      250
    );
  }

  handleSubmit() {
    if (this.props.isLocked)
      return;

    let login = this.state.login;
    let password = this.state.password;
    this.setState({ password: '', ignoreBlur: true });
    this.props.onSubmit({ login, password });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLocked) {
      if (nextProps.isLocked)
        return;

      if (Object.keys(nextProps.errors).length) {
        switch (Object.keys(nextProps.errors)[0]) {
          case 'login':
            if (this.loginInput)
              setTimeout(() => this.loginInput.focus(), 0);
            break;
          case 'password':
            if (this.passwordInput)
              setTimeout(() => this.passwordInput.focus(), 0);
            break;
        }
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
                  value={this.state.login}
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
                  value={this.state.password}
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
          <div className={this.props.isLocked ? 'd-block' : 'd-none'}>
            <img src="/img/loader-large.gif" />
          </div>
          <div className={this.props.isLocked ? 'd-none' : 'd-block'}>
            <Button color="secondary" onClick={this.props.onToggle}>
              Cancel
            </Button>
            {' '}
            <Button color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  messages: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInModal;

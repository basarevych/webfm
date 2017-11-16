'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignInForm from './SignInForm';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleToggle() {
    if (!this.props.isLocked)
      this.props.onToggleClick();
  }

  handleFormChange(event) {
    if (!this.props.isLocked)
      this.props.onFormChanged({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (!this.props.isLocked)
      this.props.onFormSubmit();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.handleToggle}
        autoFocus={true}
        backdrop="static"
        fade={true}
      >
        <ModalHeader toggle={this.handleToggle}>Sign In</ModalHeader>
        <ModalBody>
          <SignInForm
            isLocked={this.props.isLocked}
            login={this.props.login}
            password={this.props.password}
            messages={this.props.authRequest.messages}
            errors={this.props.authRequest.errors}
            onChange={this.handleFormChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button disabled={this.props.isLocked} color="secondary" onClick={this.handleToggle}>Cancel</Button>
          {' '}
          <Button disabled={this.props.isLocked} color="primary" onClick={this.handleFormSubmit}>Submit</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

SignInModal.propTypes = {
  authRequest: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onFormChanged: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default SignInModal;

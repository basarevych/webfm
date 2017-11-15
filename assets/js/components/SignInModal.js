'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignInForm from './SignInForm';

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { login: '', password: '' };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleToggle() {
    if (!this.props.isLocked)
      this.props.onToggleClick();
  }

  handleFormChange(event) {
    if (!this.props.isLocked) {
      this.setState({ [event.target.name]: event.target.value });
      this.props.onFormChanged();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (!this.props.isLocked)
      this.props.onFormSubmit(this.state.login, this.state.password);
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
  onToggleClick: PropTypes.func.isRequired,
  onFormChanged: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default SignInModal;

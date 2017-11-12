'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignInForm from './SignInForm';

const SignInModal = ({ isOpen, onToggleClick }) => (
  <Modal isOpen={isOpen} toggle={onToggleClick} backdrop={true} fade={true}>
    <ModalHeader toggle={onToggleClick}>Sign In</ModalHeader>
    <ModalBody>
      <SignInForm />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={onToggleClick}>Cancel</Button>
      {' '}
      <Button color="primary">Submit</Button>
    </ModalFooter>
  </Modal>
);

SignInModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
};

export default SignInModal;

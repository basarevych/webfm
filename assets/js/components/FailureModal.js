'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormMessages from './FormMessages';

const FailureModal = ({ isOpen, errors, messages, onDoneClick }) => {
  let list = [];
  for (let key of Object.keys(errors)) {
    let items = [];
    for (let code of Object.keys(errors[key])) {
      items.push(
        <p key={code}>{errors[key][code].message}</p>
      );
    }
    list.push(
      <dl className="row" key={key}>
        <dt className="col-sm-4 text-right">
          {__(`field_${key}_label`)}
        </dt>
        <dd className="col-sm-8">
          {items}
        </dd>
      </dl>
    );
  }
  return (
    <Modal isOpen={isOpen} size="lg" backdrop="static" fade={true} toggle={onDoneClick}>
      <ModalHeader>{__('failure_title')}</ModalHeader>
      <ModalBody>
        <FormMessages messages={messages} />
        {list}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onDoneClick}>
          {__('done_button')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

FailureModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  onDoneClick: PropTypes.func.isRequired,
};

export default FailureModal;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormMessages from './FormMessages';

class FailureModal extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    errors: PropTypes.instanceOf(Map).isRequired,
    messages: PropTypes.instanceOf(Map).isRequired,
    onDoneClick: PropTypes.func.isRequired,
  };

  render() {
    let list = [];
    for (let key of this.props.errors.keys()) {
      let items = [];
      for (let code of this.props.errors.get(key).keys()) {
        items.push(
          <p key={code}>{this.props.errors.getIn([key, code, 'message'])}</p>
        );
      }
      list.push(
        <dl className="row" key={key}>
          <dt className="col-sm-4 text-sm-right">
            {__(`field_${key}_label`)}
          </dt>
          <dd className="col-sm-8">
            {items}
          </dd>
        </dl>
      );
    }
    return (
      <Modal isOpen={this.props.isOpen} size="lg" backdrop="static" fade={true} toggle={this.props.onDoneClick}>
        <ModalHeader>{__('failure_title')}</ModalHeader>
        <ModalBody>
          <FormMessages messages={this.props.messages} />
          {list}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onDoneClick}>
            {__('done_button')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default FailureModal;

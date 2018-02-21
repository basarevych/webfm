'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';

class RenameModal extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isLocked: PropTypes.bool.isRequired,
    values: PropTypes.instanceOf(Map).isRequired,
    messages: PropTypes.instanceOf(Map).isRequired,
    errors: PropTypes.instanceOf(Map).isRequired,
    onToggle: PropTypes.func.isRequired,
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

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
      case 'share':
        if (this.directoryInput)
          setTimeout(() => this.directoryInput.focus(), 0);
        break;
      case 'directory':
        if (this.nameInput)
          setTimeout(() => this.nameInput.focus(), 0);
        break;
      case 'name':
        if (this.newNameInput)
          setTimeout(() => this.newNameInput.focus(), 0);
        break;
      case 'newName':
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

      switch (nextProps.errors.keys().next().value) {
        case 'share':
          if (this.shareInput)
            setTimeout(() => this.shareInput.focus(), 0);
          break;
        case 'directory':
          if (this.directoryInput)
            setTimeout(() => this.directoryInput.focus(), 0);
          break;
        case 'name':
          if (this.nameInput)
            setTimeout(() => this.nameInput.focus(), 0);
          break;
        case 'newName':
          if (this.newNameInput)
            setTimeout(() => this.newNameInput.focus(), 0);
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
        <ModalHeader toggle={this.props.onToggle}>{__('rename_title')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="renameShare" sm={4} className="text-sm-right">
                {__('share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="share"
                  id="renameShare"
                  disabled={true}
                  valid={(!this.props.errors.has('share')) && undefined}
                  value={this.props.values.get('share')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.shareInput = input; }}
                />
                <FieldErrors errors={this.props.errors.get('share')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="renameDirectory" sm={4} className="text-sm-right">
                {__('directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="directory"
                  id="renameDirectory"
                  disabled={true}
                  valid={(!this.props.errors.has('directory')) && undefined}
                  value={this.props.values.get('directory')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.directoryInput = input; }}
                />
                <FieldErrors errors={this.props.errors.get('directory')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="renameName" sm={4} className="text-sm-right">
                {__('name_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="name"
                  id="renameName"
                  disabled={true}
                  valid={(!this.props.errors.has('name')) && undefined}
                  value={this.props.values.get('name')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.nameInput = input; }}
                />
                <FieldErrors errors={this.props.errors.get('name')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="renameNewName" sm={4} className="text-sm-right">
                {__('new_name_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="newName"
                  id="renameNewName"
                  disabled={this.props.isLocked}
                  autoFocus
                  valid={(!this.props.errors.has('newName')) && undefined}
                  value={this.props.values.get('newName')}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.newNameInput = input; }}
                />
                <FieldErrors errors={this.props.errors.get('newName')} />
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

export default RenameModal;

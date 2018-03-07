'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, FormText, Label, Col, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FaFolderO, FaFileO, FaCog } from 'react-icons/lib/fa';
import { GenericScrollBox } from 'react-scroll-box';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';
import Viewport from './ScrollViewport';

class DeleteModal extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isLocked: PropTypes.bool.isRequired,
    isTouchDevice: PropTypes.bool.isRequired,
    values: PropTypes.instanceOf(Map).isRequired,
    messages: PropTypes.instanceOf(Map).isRequired,
    errors: PropTypes.instanceOf(Map).isRequired,
    found: PropTypes.instanceOf(Map).isRequired,
    onToggle: PropTypes.func.isRequired,
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onFind: PropTypes.func.isRequired,
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
    if (nextProps.isOpen && !this.props.isOpen) {
      this.nextFocus = 'name';
      return;
    }

    if (this.props.isLocked) {
      if (nextProps.isLocked)
        return;

      if (nextProps.errors.has('name'))
        this.nextFocus = 'name';
    }
  }

  componentDidUpdate() {
    switch (this.nextFocus) {
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
    }
    this.nextFocus = null;
  }

  render() {
    let find = null;
    if (!this.props.errors.has('name')) {
      if (this.props.found.get('isLoaded')) {
        find = [];
        for (let node of this.props.found.get('nodes')) {
          let name = node.get('name');
          find.push(
            node.get('isDirectory')
              ? <div key={name}><strong><FaFolderO/> {name}</strong></div>
              : <div key={name}><FaFileO/> {name}</div>
          );
        }
        find = (
          <div className="found-nodes">
            <div className="scroll-wrapper">
              <GenericScrollBox permitHandleDragInterruption={false} outsetScrollBarX={true} outsetScrollBarY={true}>
                <Viewport isTouchEnabled={this.props.isTouchDevice} classes="text-content condensed">
                  {find.length ? find : <em>{__('src_find_empty')}</em>}
                  <br />
                </Viewport>
              </GenericScrollBox>
            </div>
          </div>
        );
      } else if (this.props.found.get('isLoading')) {
        find = (
          <div className="found-nodes">
            <div className="processing"><FaCog className="rotating" /></div>
          </div>
        );
      } else {
        find = <FormText color="muted" dangerouslySetInnerHTML={{ __html: __('src_name_hint') }} />;
      }
    }

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.onToggle}
        backdrop="static"
        fade
        centered
      >
        <ModalHeader toggle={this.props.onToggle}>{__('delete_title')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="deleteShare" sm={4} className="text-sm-right">
                {__('share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="share"
                  id="deleteShare"
                  disabled={true}
                  invalid={this.props.errors.has('share')}
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
              <Label for="deleteDirectory" sm={4} className="text-sm-right">
                {__('directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="directory"
                  id="deleteDirectory"
                  disabled={true}
                  invalid={this.props.errors.has('directory')}
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
              <Label for="deleteName" sm={4} className="text-sm-right">
                {__('name_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    id="deleteName"
                    disabled={this.props.isLocked}
                    invalid={this.props.errors.has('name')}
                    value={this.props.values.get('name')}
                    onChange={this.handleInput}
                    onKeyPress={this.handleKeyPress}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    innerRef={(input) => { this.nameInput = input; }}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="secondary" disabled={this.props.isLocked} onClick={this.props.onFind}>
                      {__('src_find_button')}
                    </Button>
                  </InputGroupAddon>
                  <FieldErrors errors={this.props.errors.get('name')} />
                </InputGroup>
                {find}
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

export default DeleteModal;

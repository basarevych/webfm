'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, FormText, Label, Col, Input, InputGroup, InputGroupButton } from 'reactstrap';
import { FaFolderO, FaFileO, FaCog } from 'react-icons/lib/fa';
import { GenericScrollBox } from 'react-scroll-box';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';
import Viewport from './ScrollViewport';

class MoveModal extends React.Component {
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
      case 'srcShare':
        if (this.srcDirectoryInput)
          setTimeout(() => this.srcDirectoryInput.focus(), 0);
        break;
      case 'srcDirectory':
        if (this.srcNameInput)
          setTimeout(() => this.srcNameInput.focus(), 0);
        break;
      case 'srcName':
        if (this.dstShareInput)
          setTimeout(() => this.dstShareInput.focus(), 0);
        break;
      case 'dstShare':
        if (this.dstDirectoryInput)
          setTimeout(() => this.dstDirectoryInput.focus(), 0);
        break;
      case 'dstDirectory':
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
          case 'srcShare':
            if (this.srcShareInput)
              setTimeout(() => this.srcShareInput.focus(), 250);
            break;
          case 'srcDirectory':
            if (this.srcDirectoryInput)
              setTimeout(() => this.srcDirectoryInput.focus(), 250);
            break;
          case 'srcName':
            if (this.srcNameInput)
              setTimeout(() => this.srcNameInput.focus(), 250);
            break;
          case 'dstShare':
            if (this.dstShareInput)
              setTimeout(() => this.dstShareInput.focus(), 250);
            break;
          case 'dstDirectory':
            if (this.dstDirectoryInput)
              setTimeout(() => this.dstDirectoryInput.focus(), 250);
            break;
        }
        break;
      }
    }
  }

  render() {
    let find = null;
    if (!this.props.errors.srcName || !Object.keys(this.props.errors.srcName).length) {
      if (this.props.found.isLoaded) {
        find = [];
        for (let node of this.props.found.nodes) {
          find.push(node.isDirectory
            ? <div key={node.name}><strong><FaFolderO/> {node.name}</strong></div>
            : <div key={node.name}><FaFileO/> {node.name}</div>);
        }
        find = (
          <div className="found-nodes">
            <div className="scroll-wrapper">
              <GenericScrollBox permitHandleDragInterruption={false} outsetScrollBarX={true} outsetScrollBarY={true}>
                <Viewport classes="text-content condensed">
                  {find}
                  <br />
                </Viewport>
              </GenericScrollBox>
            </div>
          </div>
        );
      } else if (this.props.found.isLoading) {
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
        autoFocus={true}
        backdrop="static"
        fade={true}
      >
        <ModalHeader toggle={this.props.onToggle}>{__('move_title')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="moveSrcShare" sm={4} className="text-sm-right">
                {__('src_share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="srcShare"
                  id="moveSrcShare"
                  disabled={true}
                  valid={(!this.props.errors.srcShare || !Object.keys(this.props.errors.srcShare).length) && undefined}
                  value={this.props.values.srcShare}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.srcShareInput = input; }}
                />
                <FieldErrors errors={this.props.errors.srcShare} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="moveSrcDirectory" sm={4} className="text-sm-right">
                {__('src_directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="srcDirectory"
                  id="moveSrcDirectory"
                  disabled={true}
                  valid={(!this.props.errors.srcDirectory || !Object.keys(this.props.errors.srcDirectory).length) && undefined}
                  value={this.props.values.srcDirectory}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.srcDirectoryInput = input; }}
                />
                <FieldErrors errors={this.props.errors.srcDirectory} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="moveSrcName" sm={4} className="text-sm-right">
                {__('src_name_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <InputGroup>
                  <Input
                    type="text"
                    name="srcName"
                    id="moveSrcName"
                    disabled={this.props.isLocked}
                    autoFocus
                    valid={(!this.props.errors.srcName || !Object.keys(this.props.errors.srcName).length) && undefined}
                    value={this.props.values.srcName}
                    onChange={this.handleInput}
                    onKeyPress={this.handleKeyPress}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    innerRef={(input) => { this.srcNameInput = input; }}
                  />
                  <InputGroupButton>
                    <Button color="secondary" disabled={this.props.isLocked} onClick={this.props.onFind}>
                      {__('src_find_button')}
                    </Button>
                  </InputGroupButton>
                  <FieldErrors errors={this.props.errors.srcName} />
                </InputGroup>
                {find}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="moveDstShare" sm={4} className="text-sm-right">
                {__('dst_share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="dstShare"
                  id="moveDstShare"
                  disabled={true}
                  valid={(!this.props.errors.dstShare || !Object.keys(this.props.errors.dstShare).length) && undefined}
                  value={this.props.values.dstShare}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.dstShareInput = input; }}
                />
                <FieldErrors errors={this.props.errors.dstShare} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="moveDstDirectory" sm={4} className="text-sm-right">
                {__('dst_directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="dstDirectory"
                  id="moveDstDirectory"
                  disabled={true}
                  valid={(!this.props.errors.dstDirectory || !Object.keys(this.props.errors.dstDirectory).length) && undefined}
                  value={this.props.values.dstDirectory}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={(input) => { this.dstDirectoryInput = input; }}
                />
                <FieldErrors errors={this.props.errors.dstDirectory} />
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

MoveModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  found: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFind: PropTypes.func.isRequired,
};

export default MoveModal;

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';

class RenameModal extends React.Component {
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

    this.state = {
      isOpen: props.isOpen,
      isLocked: props.isLocked,
      ignoreBlur: true,
      nextFocus: null,
    };

    this.shareInput = React.createRef();
    this.directoryInput = React.createRef();
    this.nameInput = React.createRef();
    this.newNameInput = React.createRef();

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (nextProps.isOpen !== prevState.isOpen)
      state.isOpen = nextProps.isOpen;
    if (nextProps.isLocked !== prevState.isLocked)
      state.isLocked = nextProps.isLocked;

    if (state.isOpen === true) {
      state.nextFocus = 'newName';
    } else if (state.isLocked === false) {
      if (nextProps.errors.has('newName'))
        state.nextFocus = 'newName';
    }

    return _.keys(state).length ? state : null;
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
        if (this.directoryInput.current)
          setTimeout(() => this.directoryInput.current.focus(), 0);
        break;
      case 'directory':
        if (this.nameInput.current)
          setTimeout(() => this.nameInput.current.focus(), 0);
        break;
      case 'name':
        if (this.newNameInput.current)
          setTimeout(() => this.newNameInput.current.focus(), 0);
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

  componentDidUpdate() {
    if (this.state.nextFocus) {
      let field = this.state.nextFocus;
      this.setState({ nextFocus: null }, () => {
        switch (field) {
          case 'share':
            if (this.shareInput.current)
              setTimeout(() => this.shareInput.current.focus(), 0);
            break;
          case 'directory':
            if (this.directoryInput.current)
              setTimeout(() => this.directoryInput.current.focus(), 0);
            break;
          case 'name':
            if (this.nameInput.current)
              setTimeout(() => this.nameInput.current.focus(), 0);
            break;
          case 'newName':
            if (this.newNameInput.current)
              setTimeout(() => this.newNameInput.current.focus(), 0);
            break;
        }
      });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.onToggle}
        backdrop="static"
        fade
        centered
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
                  invalid={this.props.errors.has('share')}
                  value={this.props.values.get('share')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.shareInput}
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
                  invalid={this.props.errors.has('directory')}
                  value={this.props.values.get('directory')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.directoryInput}
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
                  invalid={this.props.errors.has('name')}
                  value={this.props.values.get('name')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.nameInput}
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
                  invalid={this.props.errors.has('newName')}
                  value={this.props.values.get('newName')}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.newNameInput}
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

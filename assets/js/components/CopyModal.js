import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, FormText, Label, Col, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FaFolderO, FaFileO, FaCog } from 'react-icons/lib/fa';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';
import VirtualizedList from './VirtualizedList';

class CopyModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isLocked: PropTypes.bool.isRequired,
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

    this.state = {
      isOpen: props.isOpen,
      isLocked: props.isLocked,
      ignoreBlur: true,
      nextFocus: null,
    };

    this.srcShareInput = React.createRef();
    this.srcDirectoryInput = React.createRef();
    this.srcNameInput = React.createRef();
    this.dstShareInput = React.createRef();
    this.dstDirectoryInput = React.createRef();

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
      state.nextFocus = 'srcName';
    } else if (state.isLocked === false) {
      if (nextProps.errors.has('srcName'))
        state.nextFocus = 'srcName';
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
      case 'srcShare':
        if (this.srcDirectoryInput.current)
          setTimeout(() => this.srcDirectoryInput.current.focus(), 0);
        break;
      case 'srcDirectory':
        if (this.srcNameInput.current)
          setTimeout(() => this.srcNameInput.current.focus(), 0);
        break;
      case 'srcName':
        if (this.dstShareInput.current)
          setTimeout(() => this.dstShareInput.current.focus(), 0);
        break;
      case 'dstShare':
        if (this.dstDirectoryInput.current)
          setTimeout(() => this.dstDirectoryInput.current.focus(), 0);
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

  componentDidUpdate() {
    if (this.state.nextFocus) {
      let field = this.state.nextFocus;
      this.setState({ nextFocus: null }, () => {
        switch (field) {
          case 'srcShare':
            if (this.srcShareInput.current)
              setTimeout(() => this.srcShareInput.current.focus(), 0);
            break;
          case 'srcDirectory':
            if (this.srcDirectoryInput.current)
              setTimeout(() => this.srcDirectoryInput.current.focus(), 0);
            break;
          case 'srcName':
            if (this.srcNameInput.current)
              setTimeout(() => this.srcNameInput.current.focus(), 0);
            break;
          case 'dstShare':
            if (this.dstShareInput.current)
              setTimeout(() => this.dstShareInput.current.focus(), 0);
            break;
          case 'dstDirectory':
            if (this.dstDirectoryInput.current)
              setTimeout(() => this.dstDirectoryInput.current.focus(), 0);
            break;
        }
      });
    }
  }

  render() {
    let find = null;
    if (!this.props.errors.has('srcName')) {
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
            <VirtualizedList rows={find.length ? find : [<em key="//empty">{__('src_find_empty')}</em>]} />
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
        <ModalHeader toggle={this.props.onToggle}>{__('copy_title')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="copySrcShare" sm={4} className="text-sm-right">
                {__('src_share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="srcShare"
                  id="copySrcShare"
                  disabled={true}
                  invalid={this.props.errors.has('srcShare')}
                  value={this.props.values.get('srcShare')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.srcShareInput}
                />
                <FieldErrors errors={this.props.errors.get('srcShare')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="copySrcDirectory" sm={4} className="text-sm-right">
                {__('src_directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="srcDirectory"
                  id="copySrcDirectory"
                  disabled={true}
                  invalid={this.props.errors.has('srcDirectory')}
                  value={this.props.values.get('srcDirectory')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.srcDirectoryInput}
                />
                <FieldErrors errors={this.props.errors.get('srcDirectory')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="copySrcName" sm={4} className="text-sm-right">
                {__('src_name_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <InputGroup>
                  <Input
                    type="text"
                    name="srcName"
                    id="copySrcName"
                    disabled={this.props.isLocked}
                    invalid={this.props.errors.has('srcName')}
                    value={this.props.values.get('srcName')}
                    onChange={this.handleInput}
                    onKeyPress={this.handleKeyPress}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    innerRef={this.srcNameInput}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="secondary" disabled={this.props.isLocked} onClick={this.props.onFind}>
                      {__('src_find_button')}
                    </Button>
                  </InputGroupAddon>
                  <FieldErrors errors={this.props.errors.get('srcName')} />
                </InputGroup>
                {find}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="copyDstShare" sm={4} className="text-sm-right">
                {__('dst_share_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="dstShare"
                  id="copyDstShare"
                  disabled={true}
                  invalid={this.props.errors.has('dstShare')}
                  value={this.props.values.get('dstShare')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.dstShareInput}
                />
                <FieldErrors errors={this.props.errors.get('dstShare')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="copyDstDirectory" sm={4} className="text-sm-right">
                {__('dst_directory_label')}
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="dstDirectory"
                  id="copyDstDirectory"
                  disabled={true}
                  invalid={this.props.errors.has('dstDirectory')}
                  value={this.props.values.get('dstDirectory')}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.dstDirectoryInput}
                />
                <FieldErrors errors={this.props.errors.get('dstDirectory')} />
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

export default CopyModal;

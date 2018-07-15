import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';
import RequiredFieldLabel from './RequiredFieldLabel';
import FormMessages from './FormMessages';
import FieldErrors from './FieldErrors';

class SignInModal extends React.Component {
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

    this.loginInput = React.createRef();
    this.passwordInput = React.createRef();

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
      state.nextFocus = 'login';
    } else if (state.isLocked === false) {
      if (nextProps.errors.has('login'))
        state.nextFocus = 'login';
      else if (nextProps.errors.has('password'))
        state.nextFocus = 'password';
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
      case 'login':
        if (this.passwordInput.current)
          setTimeout(() => this.passwordInput.current.focus(), 0);
        break;
      case 'password':
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
          case 'login':
            if (this.loginInput.current)
              setTimeout(() => this.loginInput.current.focus(), 0);
            break;
          case 'password':
            if (this.passwordInput.current)
              setTimeout(() => this.passwordInput.current.focus(), 0);
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
        <ModalHeader toggle={this.props.onToggle}>{__('sign_in_title')}</ModalHeader>
        <ModalBody>
          <Form>
            <FormMessages messages={this.props.messages} />
            <FormGroup row>
              <Label for="signInLogin" sm={4} className="text-sm-right">
                {__('login_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  name="login"
                  id="signInLogin"
                  disabled={this.props.isLocked}
                  invalid={this.props.errors.has('login')}
                  value={this.props.values.get('login')}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.loginInput}
                />
                <FieldErrors errors={this.props.errors.get('login')} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signInPassword" sm={4} className="text-sm-right">
                {__('password_label')}
                <RequiredFieldLabel />
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="signInPassword"
                  disabled={this.props.isLocked}
                  invalid={this.props.errors.has('password')}
                  value={this.props.values.get('password')}
                  onChange={this.handleInput}
                  onKeyPress={this.handleKeyPress}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  innerRef={this.passwordInput}
                />
                <FieldErrors errors={this.props.errors.get('password')} />
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

export default SignInModal;

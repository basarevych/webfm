'use strict';

import { connect } from 'react-redux';
import { authRequest } from '../actions/authRequest';
import { toggleSignInDialog } from '../actions/signInDialog';
import SignInModal from '../components/SignInModal';

const mapStateToProps = state => {
  return {
    isOpen: state.signInDialogOpen,
    isLocked: state.app.locked > 0,
    messages: state.authRequest.messages,
    errors: state.authRequest.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleSignInDialog()),
    onSubmit: (values, validate, startedAt) => dispatch(authRequest(values, validate, startedAt)),
  };
};

const SignInDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInModal);

export default SignInDialog;

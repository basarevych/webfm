'use strict';

import { connect } from 'react-redux';
import { toggleSignInDialog, updateSignInDialog } from '../actions/signInDialog';
import { signIn } from '../actions/user';
import SignInModal from '../components/SignInModal';

const mapStateToProps = state => {
  return {
    isOpen: state.signInDialog.isOpen,
    isLocked: state.signInDialog.locked > 0,
    values: state.signInDialog.values,
    messages: state.signInDialog.messages,
    errors: state.signInDialog.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleSignInDialog()),
    onInput: values => dispatch(updateSignInDialog({ values })),
    onSubmit: (when, validate) => dispatch(signIn(when, validate)),
  };
};

const SignInDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInModal);

export default SignInDialog;

'use strict';

import { connect } from 'react-redux';
import { toggleMkdirDialog, updateMkdirDialog } from '../actions/mkdirDialog';
import { mkdir } from '../actions/commands';
import MkdirModal from '../components/MkdirModal';

const mapStateToProps = state => {
  return {
    isOpen: state.mkdirDialog.isOpen,
    isLocked: state.mkdirDialog.locked > 0,
    values: state.mkdirDialog.values,
    messages: state.mkdirDialog.messages,
    errors: state.mkdirDialog.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleMkdirDialog()),
    onInput: values => dispatch(updateMkdirDialog({ values })),
    onSubmit: (when, validate) => dispatch(mkdir(when, validate)),
  };
};

const MkdirDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(MkdirModal);

export default MkdirDialog;

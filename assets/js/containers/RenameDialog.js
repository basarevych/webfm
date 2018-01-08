'use strict';

import { connect } from 'react-redux';
import { toggleRenameDialog, updateRenameDialog } from '../actions/renameDialog';
import { rename } from '../actions/commands';
import RenameModal from '../components/RenameModal';

const mapStateToProps = state => {
  return {
    isOpen: state.renameDialog.isOpen,
    isLocked: state.renameDialog.locked > 0,
    values: state.renameDialog.values,
    messages: state.renameDialog.messages,
    errors: state.renameDialog.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleRenameDialog()),
    onInput: values => dispatch(updateRenameDialog({ values })),
    onSubmit: (when, validate) => dispatch(rename(when, validate)),
  };
};

const RenameDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenameModal);

export default RenameDialog;

'use strict';

import { connect } from 'react-redux';
import { toggleDeleteDialog, updateDeleteDialog } from '../actions/deleteDialog';
import { del, find } from '../actions/commands';
import DeleteModal from '../components/DeleteModal';

const mapStateToProps = state => {
  return {
    isOpen: state.deleteDialog.isOpen,
    isLocked: state.deleteDialog.locked > 0,
    values: state.deleteDialog.values,
    messages: state.deleteDialog.messages,
    errors: state.deleteDialog.errors,
    found: state.deleteDialog.found,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleDeleteDialog()),
    onInput: values => dispatch(updateDeleteDialog({ values })),
    onSubmit: (when, validate) => dispatch(del(when, validate)),
    onFind: () => dispatch(find('DELETE')),
  };
};

const DeleteDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);

export default DeleteDialog;

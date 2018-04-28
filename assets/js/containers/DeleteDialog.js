'use strict';

import { connect } from 'react-redux';
import { toggleDeleteDialog, updateDeleteDialog } from '../actions/deleteDialog';
import { del, find } from '../actions/commands';
import DeleteModal from '../components/DeleteModal';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['deleteDialog', 'isOpen']),
    isLocked: state.getIn(['deleteDialog', 'locked']) > 0,
    values: state.getIn(['deleteDialog', 'values']),
    messages: state.getIn(['deleteDialog', 'messages']),
    errors: state.getIn(['deleteDialog', 'errors']),
    found: state.getIn(['deleteDialog', 'found']),
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

const DeleteDialog = connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
export default DeleteDialog;

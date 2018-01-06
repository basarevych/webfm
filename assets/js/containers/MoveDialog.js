'use strict';

import { connect } from 'react-redux';
import { toggleMoveDialog, updateMoveDialog } from '../actions/moveDialog';
import { move, find } from '../actions/commands';
import MoveModal from '../components/MoveModal';

const mapStateToProps = state => {
  return {
    isOpen: state.moveDialog.isOpen,
    isLocked: state.moveDialog.locked > 0,
    values: state.moveDialog.values,
    messages: state.moveDialog.messages,
    errors: state.moveDialog.errors,
    found: state.moveDialog.found,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleMoveDialog()),
    onInput: values => dispatch(updateMoveDialog({ values })),
    onSubmit: (when, validate) => dispatch(move(when, validate)),
    onFind: () => dispatch(find('MOVE')),
  };
};

const MoveDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveModal);

export default MoveDialog;

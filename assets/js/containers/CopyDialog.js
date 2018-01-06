'use strict';

import { connect } from 'react-redux';
import { toggleCopyDialog, updateCopyDialog } from '../actions/copyDialog';
import { copy, find } from '../actions/commands';
import CopyModal from '../components/CopyModal';

const mapStateToProps = state => {
  return {
    isOpen: state.copyDialog.isOpen,
    isLocked: state.copyDialog.locked > 0,
    values: state.copyDialog.values,
    messages: state.copyDialog.messages,
    errors: state.copyDialog.errors,
    found: state.copyDialog.found,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleCopyDialog()),
    onInput: values => dispatch(updateCopyDialog({ values })),
    onSubmit: (when, validate) => dispatch(copy(when, validate)),
    onFind: () => dispatch(find('COPY')),
  };
};

const CopyDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyModal);

export default CopyDialog;

'use strict';

import { connect } from 'react-redux';
import { toggleCopyDialog, updateCopyDialog } from '../actions/copyDialog';
import { copy, find } from '../actions/commands';
import CopyModal from '../components/CopyModal';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['copyDialog', 'isOpen']),
    isLocked: state.getIn(['copyDialog', 'locked']) > 0,
    values: state.getIn(['copyDialog', 'values']),
    messages: state.getIn(['copyDialog', 'messages']),
    errors: state.getIn(['copyDialog', 'errors']),
    found: state.getIn(['copyDialog', 'found']),
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

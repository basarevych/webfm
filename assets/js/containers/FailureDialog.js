'use strict';

import { connect } from 'react-redux';
import { hideFailureDialog } from '../actions/failureDialog';
import FailureModal from '../components/FailureModal';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['failureDialog', 'isOpen']),
    messages: state.getIn(['failureDialog', 'messages']),
    errors: state.getIn(['failureDialog', 'errors']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDoneClick: () => dispatch(hideFailureDialog()),
  };
};

const FailureDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(FailureModal);

export default FailureDialog;

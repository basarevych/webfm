'use strict';

import { connect } from 'react-redux';
import { clearProgress } from '../actions/progressDialog';
import ProgressModal from '../components/ProgressModal';

const mapStateToProps = state => {
  return {
    isStarted: state.getIn(['progress', 'isStarted']),
    isFinished: state.getIn(['progress', 'isFinished']),
    message: state.getIn(['progress', 'message']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDoneClick: () => dispatch(clearProgress()),
  };
};

const ProgressDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressModal);

export default ProgressDialog;

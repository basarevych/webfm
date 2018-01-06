'use strict';

import { connect } from 'react-redux';
import { clearProgress } from '../actions/progressDialog';
import ProgressModal from '../components/ProgressModal';

const mapStateToProps = state => {
  return {
    isStarted: state.progress.isStarted,
    isFinished: state.progress.isFinished,
    message: state.progress.message,
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

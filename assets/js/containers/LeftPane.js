'use strict';

import { connect } from 'react-redux';
import { setActivePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    which: 'LEFT',
    mode: state.leftPane.mode,
    isActive: state.leftPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isLoading: state.leftPane.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

'use strict';

import { connect } from 'react-redux';
import { setActivePane, toggleRightPane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    which: state.leftPane.which,
    isActive: state.leftPane.isActive,
    isVisible: state.leftPane.isVisible,
    isOtherVisible: state.rightPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
    onTogglePaneClick: () => dispatch(toggleRightPane()),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

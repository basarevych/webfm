'use strict';

import { connect } from 'react-redux';
import { setActivePane, togglePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    which: state.rightPane.which,
    isActive: state.rightPane.isActive,
    isVisible: state.rightPane.isVisible,
    isOtherVisible: state.leftPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
    onToggleOther: () => dispatch(togglePane('LEFT')),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

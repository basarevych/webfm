'use strict';

import { connect } from 'react-redux';
import { setActivePane, setPaneMode, togglePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    which: state.rightPane.which,
    mode: state.rightPane.mode,
    isActive: state.rightPane.isActive,
    isVisible: state.rightPane.isVisible,
    isOtherVisible: state.leftPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
    onSetMode: mode => dispatch(setPaneMode('RIGHT', mode)),
    onToggleOther: () => dispatch(togglePane('LEFT')),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

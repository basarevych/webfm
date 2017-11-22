'use strict';

import { connect } from 'react-redux';
import { setActivePane, setPaneMode, togglePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    which: state.leftPane.which,
    mode: state.leftPane.mode,
    isActive: state.leftPane.isActive,
    isVisible: state.leftPane.isVisible,
    isOtherVisible: state.rightPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
    onSetMode: mode => dispatch(setPaneMode('LEFT', mode)),
    onToggleOther: () => dispatch(togglePane('RIGHT')),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

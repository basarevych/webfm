'use strict';

import { connect } from 'react-redux';
import { setActivePane, setPaneMode, togglePane, paneCD } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    which: state.leftPane.which,
    mode: state.leftPane.mode,
    shares: state.app.shares,
    share: state.leftPane.share,
    path: state.leftPane.path,
    list: state.leftPane.list,
    isActive: state.leftPane.isActive,
    isVisible: state.leftPane.isVisible,
    isOtherVisible: state.rightPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
    onSetShare: share => dispatch(paneCD('LEFT', share, '/')),
    onSetMode: mode => dispatch(setPaneMode('LEFT', mode)),
    onToggleOther: () => dispatch(togglePane('RIGHT')),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

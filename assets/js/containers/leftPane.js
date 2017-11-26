'use strict';

import { connect } from 'react-redux';
import { setActivePane, setPaneMode, setPaneShare, setPanePath, togglePane } from '../actions/pane';
import { sendPaths } from '../actions/shares';
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
    onSetShare: async share => {
      await dispatch(setPaneShare('LEFT', share));
      await dispatch(setPanePath('LEFT', '/'));
      await dispatch(sendPaths());
    },
    onSetMode: mode => dispatch(setPaneMode('LEFT', mode)),
    onToggleOther: () => dispatch(togglePane('RIGHT')),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

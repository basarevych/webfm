'use strict';

import { connect } from 'react-redux';
import { setActivePane, setPaneMode, setPaneShare, setPanePath, togglePane } from '../actions/pane';
import { sendPaths } from '../actions/shares';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    which: state.rightPane.which,
    mode: state.rightPane.mode,
    shares: state.app.shares,
    share: state.rightPane.share,
    path: state.rightPane.path,
    list: state.rightPane.list,
    isActive: state.rightPane.isActive,
    isVisible: state.rightPane.isVisible,
    isOtherVisible: state.leftPane.isVisible,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
    onSetShare: async share => {
      await dispatch(setPaneShare('RIGHT', share));
      await dispatch(setPanePath('RIGHT', '/'));
      await dispatch(sendPaths());
    },
    onSetMode: mode => dispatch(setPaneMode('RIGHT', mode)),
    onToggleOther: () => dispatch(togglePane('LEFT')),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

'use strict';

import { connect } from 'react-redux';
import { paneCD, setActivePane, setPaneMode, togglePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    breakpoint: state.app.breakpoint,
    mode: state.rightPane.mode,
    otherMode: state.leftPane.mode,
    shares: state.user.shares,
    share: state.rightPane.share,
    path: state.rightPane.path,
    list: state.rightPaneList,
    isActive: state.rightPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isLoading: state.rightPane.isLoading,
    isForbidden: state.rightPane.isForbidden,
    isOtherVisible: state.leftPane.isVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
    onSetShare: share => dispatch(paneCD('RIGHT', share, '/')),
    onChangeDirectory: directory => dispatch(paneCD('RIGHT', null, directory)),
    onToggleOther: () => dispatch(togglePane('LEFT')),
    onSetOtherMode: mode => dispatch(setPaneMode('LEFT', mode)),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

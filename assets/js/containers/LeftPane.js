'use strict';

import { connect } from 'react-redux';
import { paneCD, setActivePane, setPaneMode, togglePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    breakpoint: state.app.breakpoint,
    mode: state.leftPane.mode,
    otherMode: state.rightPane.mode,
    shares: state.user.shares,
    share: state.leftPane.share,
    path: state.leftPane.path,
    list: state.leftPaneList,
    isActive: state.leftPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isLoading: state.leftPane.isLoading,
    isForbidden: state.leftPane.isForbidden,
    isOtherVisible: state.rightPane.isVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
    onSetShare: share => dispatch(paneCD('LEFT', share, '/')),
    onChangeDirectory: directory => dispatch(paneCD('LEFT', null, directory)),
    onToggleOther: () => dispatch(togglePane('RIGHT')),
    onSetOtherMode: mode => dispatch(setPaneMode('RIGHT', mode)),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

'use strict';

import { connect } from 'react-redux';
import { setPaneMode, setActivePane, togglePane, paneCD } from '../actions/pane';
import ListView from '../components/ListView';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    shares: state.user.shares,
    share: state.rightPane.share,
    path: state.rightPane.path,
    list: state.rightPaneList,
    isActive: state.rightPane.isActive,
    isForbidden: state.leftPane.isForbidden,
    isOtherVisible: state.leftPane.isVisible,
    otherMode: state.leftPane.mode,
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

const RightList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default RightList;

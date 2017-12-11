'use strict';

import { connect } from 'react-redux';
import { setPaneMode, setActivePane, togglePane, paneCD } from '../actions/pane';
import ListView from '../components/ListView';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    shares: state.user.shares,
    share: state.leftPane.share,
    path: state.leftPane.path,
    list: state.leftPaneList,
    isActive: state.leftPane.isActive,
    isForbidden: state.leftPane.isForbidden,
    isOtherVisible: state.rightPane.isVisible,
    otherMode: state.rightPane.mode,
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

const LeftList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default LeftList;

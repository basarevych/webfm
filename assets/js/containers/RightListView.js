'use strict';

import { connect } from 'react-redux';
import { setPaneMode, paneCD, setActivePane } from '../actions/pane';
import ListView from '../components/ListView';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    shares: state.user.shares,
    share: state.rightPane.share,
    path: state.rightPane.path,
    list: state.rightPaneList,
    isActive: state.rightPane.isActive,
    isDisabled: !state.user.isAuthorized,
    isOtherVisible: state.leftPane.isVisible,
    otherMode: state.leftPane.mode,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
    onSetShare: share => dispatch(paneCD('RIGHT', share, '/')),
    onSetOtherMode: mode => dispatch(setPaneMode('LEFT', mode)),
    onChangeDirectory: directory => dispatch(paneCD('RIGHT', null, directory)),
  };
};

const RightList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default RightList;

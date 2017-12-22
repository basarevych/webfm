'use strict';

import { connect } from 'react-redux';
import {
  paneCD, paneSort, setActivePane, setPaneMode, togglePane, paneSelect, paneSelectRange, paneToggleSelect
} from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    breakpoint: state.app.breakpoint,
    mode: state.rightPane.mode,
    otherMode: state.leftPane.mode,
    shares: state.user.shares,
    share: state.rightPane.share,
    path: state.rightPane.path,
    list: state.rightPane.list,
    selected: state.rightPane.selected,
    sortField: state.leftPane.sortField,
    sortDir: state.leftPane.sortDir,
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
    onSetSort: (field, dir) => dispatch(paneSort('RIGHT', field, dir)),
    onChangeDirectory: directory => dispatch(paneCD('RIGHT', null, directory)),
    onNodeClick: node => dispatch(paneSelect('RIGHT', node)),
    onNodeShiftClick: node => dispatch(paneSelectRange('RIGHT', node)),
    onNodeControlClick: node => dispatch(paneToggleSelect('RIGHT', node)),
    onToggleOther: () => dispatch(togglePane('LEFT')),
    onSetOtherMode: mode => dispatch(setPaneMode('LEFT', mode)),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

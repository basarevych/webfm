'use strict';

import { connect } from 'react-redux';
import {
  paneCD, paneSort, setActivePane, setPaneMode, togglePane, paneSelect, paneSelectRange, paneToggleSelect
} from '../actions/pane';
import { loadSize } from '../actions/size';
import Pane from '../components/Pane';
import { fastCopy, fastMove, fastDel } from '../actions/commands';

const mapStateToProps = state => {
  let selectedId;
  if (state.leftPane.share && state.leftPane.name)
    selectedId = `${state.leftPane.share}:${state.leftPane.path}`;

  return {
    breakpoint: state.app.breakpoint,
    mode: state.rightPane.mode,
    otherMode: state.leftPane.mode,
    otherPath: state.leftPane.path,
    shares: state.user.shares,
    share: state.rightPane.share,
    directory: state.rightPane.directory,
    list: state.rightPane.list,
    sizes: state.sizes,
    selectedIndexes: state.rightPane.selectedIndexes,
    sortField: state.leftPane.sortField,
    sortDir: state.leftPane.sortDir,
    content: selectedId && state.contents[selectedId],
    info: selectedId && state.infos[selectedId],
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
    onChangeDirectory: directory => dispatch(paneCD('RIGHT', null, directory === '/' ? '/' : directory + '/')),
    onNodeClick: node => dispatch(paneSelect('RIGHT', node)),
    onNodeShiftClick: node => dispatch(paneSelectRange('RIGHT', node)),
    onNodeControlClick: node => dispatch(paneToggleSelect('RIGHT', node)),
    onSizeClick: (share, path) => dispatch(loadSize(share, path)),
    onToggleOther: () => dispatch(togglePane('LEFT')),
    onSetOtherMode: mode => dispatch(setPaneMode('LEFT', mode)),
    onCopyClick: name => dispatch(fastCopy('RIGHT', name)),
    onMoveClick: name => dispatch(fastMove('RIGHT', name)),
    onDeleteClick: name => dispatch(fastDel('RIGHT', name)),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

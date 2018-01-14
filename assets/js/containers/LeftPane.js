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
  if (state.rightPane.share && state.rightPane.name)
    selectedId = `${state.rightPane.share}:${state.rightPane.path}`;

  return {
    which: 'LEFT',
    breakpoint: state.app.breakpoint,
    mode: state.leftPane.mode,
    otherMode: state.rightPane.mode,
    otherPath: state.rightPane.path,
    shares: state.user.shares,
    share: state.leftPane.share,
    directory: state.leftPane.directory,
    list: state.leftPane.list,
    sizes: state.sizes,
    selectedIndexes: state.leftPane.selectedIndexes,
    sortField: state.leftPane.sortField,
    sortDir: state.leftPane.sortDir,
    content: selectedId && state.contents[selectedId],
    info: selectedId && state.infos[selectedId],
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
    onSetSort: (field, dir) => dispatch(paneSort('LEFT', field, dir)),
    onChangeDirectory: directory => dispatch(paneCD('LEFT', null, directory === '/' ? '/' : directory + '/')),
    onNodeClick: node => dispatch(paneSelect('LEFT', node)),
    onNodeShiftClick: node => dispatch(paneSelectRange('LEFT', node)),
    onNodeControlClick: node => dispatch(paneToggleSelect('LEFT', node)),
    onSizeClick: (share, path) => dispatch(loadSize(share, path)),
    onToggleOther: () => dispatch(togglePane('RIGHT')),
    onSetOtherMode: mode => dispatch(setPaneMode('RIGHT', mode)),
    onCopyClick: name => dispatch(fastCopy('LEFT', name)),
    onMoveClick: name => dispatch(fastMove('LEFT', name)),
    onDeleteClick: name => dispatch(fastDel('LEFT', name)),
  };
};

const LeftPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default LeftPane;

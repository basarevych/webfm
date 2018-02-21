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
  if (state.getIn(['rightPane', 'share']) && state.getIn(['rightPane', 'name']))
    selectedId = `${state.getIn(['rightPane', 'share'])}:${state.getIn(['rightPane', 'path'])}`;

  return {
    which: 'LEFT',
    breakpoint: state.getIn(['app', 'breakpoint']),
    mode: state.getIn(['leftPane', 'mode']),
    otherPath: state.getIn(['rightPane', 'path']),
    shares: state.getIn(['user', 'shares']),
    share: state.getIn(['leftPane', 'share']),
    directory: state.getIn(['leftPane', 'directory']),
    list: state.getIn(['leftPane', 'list']),
    sizes: state.getIn(['sizes']),
    selectedIndexes: state.getIn(['leftPane', 'selectedIndexes']),
    sortField: state.getIn(['leftPane', 'sortField']),
    sortDir: state.getIn(['leftPane', 'sortDir']),
    content: selectedId && state.getIn(['contents', selectedId]),
    info: selectedId && state.getIn(['infos', selectedId]),
    isActive: state.getIn(['leftPane', 'isActive']),
    isDisabled: !state.getIn(['user', 'isAuthorized']),
    isLoading: state.getIn(['leftPane', 'isLoading']),
    isForbidden: state.getIn(['leftPane', 'isForbidden']),
    isOtherVisible: state.getIn(['rightPane', 'isVisible']),
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
    onSetMode: mode => dispatch(setPaneMode('LEFT', mode)),
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

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
  if (state.getIn(['leftPane', 'share']) && state.getIn(['leftPane', 'name']))
    selectedId = `${state.getIn(['leftPane', 'share'])}:${state.getIn(['leftPane', 'path'])}`;

  return {
    which: 'RIGHT',
    breakpoint: state.getIn(['app', 'breakpoint']),
    mode: state.getIn(['rightPane', 'mode']),
    otherPath: state.getIn(['leftPane', 'path']),
    shares: state.getIn(['user', 'shares']),
    share: state.getIn(['rightPane', 'share']),
    directory: state.getIn(['rightPane', 'directory']),
    list: state.getIn(['rightPane', 'list']),
    sizes: state.get('sizes'),
    selectedIndexes: state.getIn(['rightPane', 'selectedIndexes']),
    sortField: state.getIn(['leftPane', 'sortField']),
    sortDir: state.getIn(['leftPane', 'sortDir']),
    content: selectedId && state.getIn(['contents', selectedId]),
    info: selectedId && state.getIn(['infos', selectedId]),
    isActive: state.getIn(['rightPane', 'isActive']),
    isDisabled: !state.getIn(['user', 'isAuthorized']),
    isLoading: state.getIn(['rightPane', 'isLoading']),
    isForbidden: state.getIn(['rightPane', 'isForbidden']),
    isOtherVisible: state.getIn(['leftPane', 'isVisible']),
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
    onSetMode: mode => dispatch(setPaneMode('RIGHT', mode)),
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

'use strict';

import { createSelector } from 'reselect/lib/index';
import { connect } from 'react-redux';
import { paneCD, paneSelect, paneSelectRange, paneToggleSelect } from '../actions/pane';
import { loadSize } from '../actions/size';
import { fastCopy, fastDel, fastMove } from '../actions/commands';
import { handleDrag } from '../actions/drag';
import ListItemComponent from '../components/ListItem';

const getNode = createSelector(
  (state, props) => state.getIn([props.which === 'LEFT' ? 'leftPane' : 'rightPane', 'list']),
  (state, props) => props.index,
  (list, index) => list.get(index)
);

const getSize = createSelector(
  (state, props) => state.getIn([props.which === 'LEFT' ? 'leftPane' : 'rightPane', 'share']),
  state => state.get('sizes'),
  (state, props) => getNode(state, props),
  (share, sizes, node) => node && sizes.get(`${share}:${node.get('path')}`)
);

const getIsSelected = createSelector(
  (state, props) => state.getIn([props.which === 'LEFT' ? 'leftPane' : 'rightPane', 'selectedIndexes']),
  (state, props) => props.index,
  (selected, index) => selected.includes(index)
);

const mapStateToProps = (state, ownProps) => {
  return {
    share: state.getIn([ownProps.which === 'LEFT' ? 'leftPane' : 'rightPane', 'share']),
    node: getNode(state, ownProps),
    size: getSize(state, ownProps),
    isSelected: getIsSelected(state, ownProps),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeDirectory: directory => dispatch(paneCD(ownProps.which, null, directory === '/' ? '/' : directory + '/')),
    onNodeClick: node => dispatch(paneSelect(ownProps.which, node)),
    onNodeShiftClick: node => dispatch(paneSelectRange(ownProps.which, node)),
    onNodeControlClick: node => dispatch(paneToggleSelect(ownProps.which, node)),
    onSizeClick: (share, path) => dispatch(loadSize(share, path)),
    onCopyClick: name => dispatch(fastCopy(ownProps.which, name)),
    onMoveClick: name => dispatch(fastMove(ownProps.which, name)),
    onDeleteClick: name => dispatch(fastDel(ownProps.which, name)),
    onDrag: (pane, isDragging, isSelected) => dispatch(handleDrag(pane, isDragging, isSelected)),
  };
};

const ListItem = connect(mapStateToProps, mapDispatchToProps)(ListItemComponent);
export default ListItem;

import { connect } from 'react-redux';
import { setActivePane } from '../actions/pane';
import { handleDrop } from '../actions/drag';
import PaneComponent from '../components/Pane';

const mapStateToProps = (state, ownProps) => {
  let paneId = (ownProps.which === 'LEFT' ? 'leftPane' : 'rightPane');
  let dragId = (ownProps.which === 'LEFT' ? 'right' : 'left');

  return {
    mode: state.getIn([paneId, 'mode']),
    breakpoint: state.getIn(['app', 'breakpoint']),
    isActive: state.getIn([paneId, 'isActive']),
    isDisabled: !state.getIn(['user', 'isAuthorized']),
    isLoading: state.getIn([paneId, 'isLoading']),
    isOtherDragging: state.getIn(['drag', dragId, 'isDragging']),
    isOtherDraggingSelected: state.getIn(['drag', dragId, 'isSelected']),
    isOtherDraggingCopy: state.getIn(['drag', dragId, 'dragMode']) === 'COPY',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPaneClick: () => dispatch(setActivePane(ownProps.which)),
    onDrop: (pane, name, isSelected) => dispatch(handleDrop(pane, name, isSelected)),
  };
};

const Pane = connect(mapStateToProps, mapDispatchToProps)(PaneComponent);
export default Pane;

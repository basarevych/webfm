import { connect } from 'react-redux';
import { toggleMoveDialog, updateMoveDialog } from '../actions/moveDialog';
import { move, find } from '../actions/commands';
import MoveModal from '../components/MoveModal';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['moveDialog', 'isOpen']),
    isLocked: state.getIn(['moveDialog', 'locked']) > 0,
    values: state.getIn(['moveDialog', 'values']),
    messages: state.getIn(['moveDialog', 'messages']),
    errors: state.getIn(['moveDialog', 'errors']),
    found: state.getIn(['moveDialog', 'found']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleMoveDialog()),
    onInput: values => dispatch(updateMoveDialog({ values })),
    onSubmit: (when, validate) => dispatch(move(when, validate)),
    onFind: () => dispatch(find('MOVE')),
  };
};

const MoveDialog = connect(mapStateToProps, mapDispatchToProps)(MoveModal);
export default MoveDialog;

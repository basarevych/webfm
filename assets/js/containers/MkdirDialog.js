import { connect } from 'react-redux';
import { toggleMkdirDialog, updateMkdirDialog } from '../actions/mkdirDialog';
import { mkdir } from '../actions/commands';
import MkdirModal from '../components/MkdirModal';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['mkdirDialog', 'isOpen']),
    isLocked: state.getIn(['mkdirDialog', 'locked']) > 0,
    values: state.getIn(['mkdirDialog', 'values']),
    messages: state.getIn(['mkdirDialog', 'messages']),
    errors: state.getIn(['mkdirDialog', 'errors']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggleMkdirDialog()),
    onInput: values => dispatch(updateMkdirDialog({ values })),
    onSubmit: (when, validate) => dispatch(mkdir(when, validate)),
  };
};

const MkdirDialog = connect(mapStateToProps, mapDispatchToProps)(MkdirModal);
export default MkdirDialog;

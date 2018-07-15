import { connect } from 'react-redux';
import { toggleNavbar } from '../actions/navbar';
import { toggleSignInDialog } from '../actions/signInDialog';
import { toggleMkdirDialog } from '../actions/mkdirDialog';
import { toggleRenameDialog } from '../actions/renameDialog';
import { toggleCopyDialog } from '../actions/copyDialog';
import { toggleMoveDialog } from '../actions/moveDialog';
import { toggleDeleteDialog } from '../actions/deleteDialog';
import { signOut } from '../actions/user';
import NavbarComponent from '../components/Navbar';

const mapStateToProps = state => {
  return {
    isOpen: state.getIn(['navbar', 'isOpen']),
    breakpoint: state.getIn(['app', 'breakpoint']),
    isLoggedIn: state.getIn(['user', 'isAuthorized']),
    login: state.getIn(['user', 'login']),
    hasSelection:
      (state.getIn(['leftPane', 'isActive']) && !!state.getIn(['leftPane', 'name'])) ||
      (state.getIn(['rightPane', 'isActive']) && !!state.getIn(['rightPane', 'name'])),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavbar: () => dispatch(toggleNavbar()),
    onMkdirCommand: () => dispatch(toggleMkdirDialog()),
    onRenameCommand: () => dispatch(toggleRenameDialog()),
    onCopyCommand: () => dispatch(toggleCopyDialog()),
    onMoveCommand: () => dispatch(toggleMoveDialog()),
    onDeleteCommand: () => dispatch(toggleDeleteDialog()),
    onSignIn: () => dispatch(toggleSignInDialog()),
    onSignOut: () => dispatch(signOut()),
  };
};

const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
export default Navbar;

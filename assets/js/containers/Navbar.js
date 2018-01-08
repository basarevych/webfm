'use strict';

import { connect } from 'react-redux';
import { toggleNavbar } from '../actions/navbar';
import { toggleSignInDialog } from '../actions/signInDialog';
import { toggleMkdirDialog } from '../actions/mkdirDialog';
import { toggleRenameDialog } from '../actions/renameDialog';
import { toggleCopyDialog } from '../actions/copyDialog';
import { toggleMoveDialog } from '../actions/moveDialog';
import { signOut } from '../actions/user';
import TopNavbar from '../components/TopNavbar';

const mapStateToProps = state => {
  return {
    isOpen: state.navbar.isOpen,
    breakpoint: state.app.breakpoint,
    isLoggedIn: state.user.isAuthorized,
    login: state.user.login,
    hasSelection: (state.leftPane.isActive && !!state.leftPane.name) || (state.rightPane.isActive && !!state.rightPane.name),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavbar: () => dispatch(toggleNavbar()),
    onMkdirCommand: () => dispatch(toggleMkdirDialog()),
    onRenameCommand: () => dispatch(toggleRenameDialog()),
    onCopyCommand: () => dispatch(toggleCopyDialog()),
    onMoveCommand: () => dispatch(toggleMoveDialog()),
    onSignIn: () => dispatch(toggleSignInDialog()),
    onSignOut: () => dispatch(signOut()),
  };
};

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

export default Navbar;

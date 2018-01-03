'use strict';

import { connect } from 'react-redux';
import { toggleNavbar } from '../actions/navbar';
import { toggleSignInDialog } from '../actions/signInDialog';
import { toggleMkdirDialog } from '../actions/mkdirDialog';
import { signOut } from '../actions/user';
import TopNavbar from '../components/TopNavbar';

const mapStateToProps = state => {
  return {
    isOpen: state.navbar.isOpen,
    breakpoint: state.app.breakpoint,
    isLoggedIn: state.user.isAuthorized,
    login: state.user.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavbar: () => dispatch(toggleNavbar()),
    onMkdir: () => dispatch(toggleMkdirDialog()),
    onSignIn: () => dispatch(toggleSignInDialog()),
    onSignOut: () => dispatch(signOut()),
  };
};

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

export default Navbar;

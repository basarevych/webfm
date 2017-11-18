'use strict';

import { connect } from 'react-redux';
import { toggleSignInDialog } from '../actions/signInDialog';
import { authSignOut } from '../actions/authRequest';
import TopNavbar from '../components/TopNavbar';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    isLocked: state.app.locked > 0,
    isLoggedIn: state.authStatus.authorized,
    login: state.authStatus.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInClick: () => dispatch(toggleSignInDialog()),
    onSignOutClick: () => dispatch(authSignOut()),
  };
};

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

export default Navbar;

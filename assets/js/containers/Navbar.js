'use strict';

import { connect } from 'react-redux';
import { toggleSignInDialog, signOut } from '../actions/signInDialog';
import TopNavbar from '../components/TopNavbar';

const mapStateToProps = state => {
  return {
    viewport: state.app.viewport,
    isLoggedIn: state.status.authorized,
    login: state.status.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInClick: () => dispatch(toggleSignInDialog()),
    onSignOutClick: () => dispatch(signOut()),
  };
};

const Navbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

export default Navbar;
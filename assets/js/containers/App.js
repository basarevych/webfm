'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { toggleMainNavbar } from '../actions/mainNavbar';
import { toggleSignInModal } from '../actions/signInModal';
import { authRequest, resetAuthRequest, authSignOut } from '../actions/authRequest';

const mapStateToProps = state => {
  return {
    app: state.app,
    authStatus: state.authStatus,
    authRequest: state.authRequest,
    mainNavbarOpen: state.mainNavbarOpen,
    signInModalOpen: state.signInModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMainNavbarToggleClick: () => dispatch(toggleMainNavbar()),
    onSignInModalToggleClick: () => dispatch(toggleSignInModal()),
    onSignInFormChanged: () => dispatch(resetAuthRequest()),
    onSignInFormSubmit: (login, password) => dispatch(authRequest(login, password)),
    onSignOutClick: () => dispatch(authSignOut()),
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

export default App;

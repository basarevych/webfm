'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { toggleMainNavbar } from '../actions/mainNavbar';
import { toggleSignInModal, updateSignInModal } from '../actions/signInModal';
import { authRequest, resetAuthRequest, authSignOut } from '../actions/authRequest';

const mapStateToProps = state => {
  return {
    app: state.app,
    authStatus: state.authStatus,
    authRequest: state.authRequest,
    mainNavbarOpen: state.mainNavbarOpen,
    signInModal: state.signInModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMainNavbarToggleClick: () => dispatch(toggleMainNavbar()),
    onSignInModalToggleClick: () => dispatch(toggleSignInModal()),
    onSignInFormChanged: props => dispatch(updateSignInModal(props.login, props.password)),
    onSignInFormSubmit: () => dispatch(authRequest()),
    onSignOutClick: () => dispatch(authSignOut()),
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

export default App;

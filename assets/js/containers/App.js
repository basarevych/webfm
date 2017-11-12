'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { toggleMainNavbar } from '../actions/mainNavbar';
import { toggleSignInModal } from '../actions/signInModal';

const mapStateToProps = state => {
  return {
    mainNavbarOpen: state.mainNavbarOpen,
    signInModalOpen: state.signInModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMainNavbarToggleClick: () => {
      dispatch(toggleMainNavbar());
    },
    onSignInModalToggleClick: () => {
      dispatch(toggleSignInModal());
    },
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

export default App;

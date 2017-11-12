'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import MainNavbar from './MainNavbar';
import SignInModal from './SignInModal';

const Screen = (
  {
    signInModalOpen,
    mainNavbarOpen,
    onMainNavbarToggleClick,
    onSignInModalToggleClick,
  }
) => (
  <div className="window-wrapper d-flex flex-column">
    <div>
      <MainNavbar
        isOpen={mainNavbarOpen}
        onToggleClick={onMainNavbarToggleClick}
        onSignInClick={onSignInModalToggleClick}
      />
      <SignInModal
        isOpen={signInModalOpen}
        onToggleClick={onSignInModalToggleClick}
      />
    </div>
    <div className="flex-grow d-flex">
      <div className="w-50">pane 1</div>
      <div className="w-50">pane 2</div>
    </div>
  </div>
);

Screen.propTypes = {
  mainNavbarOpen: PropTypes.bool.isRequired,
  signInModalOpen: PropTypes.bool.isRequired,
  onMainNavbarToggleClick: PropTypes.func.isRequired,
  onSignInModalToggleClick: PropTypes.func.isRequired,
};

export default Screen;

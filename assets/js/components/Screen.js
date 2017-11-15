'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import MainNavbar from './MainNavbar';
import SignInModal from './SignInModal';
import authStatus from '../reducers/authStatus';

const Screen = (
  {
    app,
    authStatus,
    authRequest,
    signInModalOpen,
    mainNavbarOpen,
    onMainNavbarToggleClick,
    onSignInModalToggleClick,
    onSignInFormChanged,
    onSignInFormSubmit,
    onSignOutClick,
  }
) => (
  <div className="window-wrapper d-flex flex-column">
    <div>
      <MainNavbar
        isOpen={mainNavbarOpen}
        isLocked={!!app.locked}
        isLoggedIn={authStatus.authorized}
        login={authStatus.login}
        onToggleClick={onMainNavbarToggleClick}
        onSignInClick={onSignInModalToggleClick}
        onSignOutClick={onSignOutClick}
      />
      <SignInModal
        authRequest={authRequest}
        isOpen={signInModalOpen}
        isLocked={!!app.locked}
        onToggleClick={onSignInModalToggleClick}
        onFormChanged={onSignInFormChanged}
        onFormSubmit={onSignInFormSubmit}
      />
    </div>
    <div className="flex-grow d-flex">
      <div className="w-50">pane 1</div>
      <div className="w-50">pane 2</div>
    </div>
  </div>
);

Screen.propTypes = {
  app: PropTypes.object.isRequired,
  authStatus: PropTypes.object.isRequired,
  authRequest: PropTypes.object.isRequired,
  mainNavbarOpen: PropTypes.bool.isRequired,
  signInModalOpen: PropTypes.bool.isRequired,
  onMainNavbarToggleClick: PropTypes.func.isRequired,
  onSignInModalToggleClick: PropTypes.func.isRequired,
  onSignInFormChanged: PropTypes.func.isRequired,
  onSignInFormSubmit: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default Screen;

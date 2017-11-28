'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import LeftPane from '../containers/LeftPane';
import RightPane from '../containers/RightPane';

const Screen = ({ isAppConnected, isLeftPaneVisible, isRightPaneVisible }) => {
  let notConnected = null;
  if (!isAppConnected) {
    notConnected = (
      <div className="page-overlay shaded">
        <div className="no-connection-window rounded">
          <div className="pull-left">
            <i className="fa fa-spin fa-fw fa-cog" />
          </div>
          <div className="ml-5">
            {__('not_connected_message')}
          </div>
        </div>
      </div>
    );
  }

  let leftPane = null;
  if (isLeftPaneVisible) {
    leftPane = (
      <Fade>
        <LeftPane />
      </Fade>
    );
  }

  let rightPane = null;
  if (isRightPaneVisible) {
    rightPane = (
      <Fade>
        <RightPane />
      </Fade>
    );
  }

  return (
    <div className="w-100 h-100">
      {notConnected}
      <div className="w-100 h-100 d-flex flex-column">
        <div>
          <Navbar />
          <SignInDialog />
        </div>
        <TransitionGroup className="pane-container">
          {leftPane}
          {rightPane}
        </TransitionGroup>
      </div>
    </div>
  );
};

Screen.propTypes = {
  isAppConnected: PropTypes.bool.isRequired,
  isLeftPaneVisible: PropTypes.bool.isRequired,
  isRightPaneVisible: PropTypes.bool.isRequired,
};

export default Screen;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import LeftPane from '../containers/leftPane';
import RightPane from '../containers/rightPane';

const Screen = ({ isLeftPaneVisible, isRightPaneVisible }) => {
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
  );
};

Screen.propTypes = {
  isLeftPaneVisible: PropTypes.bool.isRequired,
  isRightPaneVisible: PropTypes.bool.isRequired,
};


export default Screen;

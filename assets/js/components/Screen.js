'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import LeftPane from '../containers/leftPane';
import RightPane from '../containers/rightPane';

const Screen = ({ isRightPaneVisible }) => {
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
        <LeftPane />
        {rightPane}
      </TransitionGroup>
    </div>
  );
};

Screen.propTypes = {
  isRightPaneVisible: PropTypes.bool.isRequired,
};


export default Screen;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { FaCog } from 'react-icons/lib/fa';
import Fade from './Fade';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import ProgressDialog from '../containers/ProgressDialog';
import MkdirDialog from '../containers/MkdirDialog';
import RenameDialog from '../containers/RenameDialog';
import CopyDialog from '../containers/CopyDialog';
import MoveDialog from '../containers/MoveDialog';
import DeleteDialog from '../containers/DeleteDialog';
import LeftPane from '../containers/LeftPane';
import RightPane from '../containers/RightPane';

const Screen = ({
  isConnected,
  isLeftPaneVisible,
  isRightPaneVisible,
}) => {
  let overlay = null;
  if (!isConnected) {
    overlay = (
      <div className="page-overlay shaded">
        <div className="no-connection-window rounded">
          <FaCog className="rotating icon-text" />
          &nbsp;
          {__('not_connected_message')}
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 h-100">
      {overlay}
      <div className="w-100 h-100 d-flex flex-column">
        <div>
          <Navbar />
          <SignInDialog />
          <ProgressDialog />
          <MkdirDialog />
          <RenameDialog />
          <CopyDialog />
          <MoveDialog />
          <DeleteDialog />
        </div>
        <TransitionGroup className="pane-container">
          {isLeftPaneVisible ? <Fade><LeftPane /></Fade> : null}
          {isRightPaneVisible ? <Fade><RightPane /></Fade> : null}
        </TransitionGroup>
      </div>
    </div>
  );
};

Screen.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  isLeftPaneVisible: PropTypes.bool.isRequired,
  isRightPaneVisible: PropTypes.bool.isRequired,
};

export default Screen;

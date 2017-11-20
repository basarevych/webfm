'use strict';

import React from 'react';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import LeftPane from '../containers/leftPane';
import RightPane from '../containers/rightPane';

const App = () => (
  <div className="window-wrapper d-flex flex-column">
    <div>
      <Navbar />
      <SignInDialog />
    </div>
    <div className="pane-container">
      <div className="pane-wrapper">
        <LeftPane />
      </div>
      <div className="pane-wrapper">
        <RightPane />
      </div>
    </div>
  </div>
);

export default App;

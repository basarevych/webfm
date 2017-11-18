'use strict';

import React from 'react';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';

const App = () => (
  <div className="window-wrapper d-flex flex-column">
    <div>
      <Navbar />
      <SignInDialog />
    </div>
    <div className="flex-grow d-flex">
      <div className="w-50">pane 1</div>
      <div className="w-50">pane 2</div>
    </div>
  </div>
);

export default App;

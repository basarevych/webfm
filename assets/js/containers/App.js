'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = state => {
  return {
    isConnected: state.app.isConnected,
    isLeftPaneVisible: state.leftPane.isVisible,
    isRightPaneVisible: state.rightPane.isVisible,
  };
};

const App = connect(
  mapStateToProps,
  null,
)(Screen);

export default App;

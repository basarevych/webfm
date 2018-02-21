'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = state => {
  return {
    isConnected: state.getIn(['app', 'isConnected']) && state.getIn(['app', 'isSameVersion']),
    isLeftPaneVisible: state.getIn(['leftPane', 'isVisible']),
    isRightPaneVisible: state.getIn(['rightPane', 'isVisible']),
  };
};

const App = connect(
  mapStateToProps,
  null,
)(Screen);

export default App;

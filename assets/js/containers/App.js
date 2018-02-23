'use strict';

import { connect } from 'react-redux';
import { updateDragMode } from '../actions/drag';
import Screen from '../components/Screen';

const mapStateToProps = state => {
  return {
    isConnected: state.getIn(['app', 'isConnected']) && state.getIn(['app', 'isSameVersion']),
    isLeftPaneVisible: state.getIn(['leftPane', 'isVisible']),
    isRightPaneVisible: state.getIn(['rightPane', 'isVisible']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetDragMode: mode => dispatch(updateDragMode(mode)),
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen);

export default App;

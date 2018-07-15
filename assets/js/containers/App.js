import { connect } from 'react-redux';
import { updateDragMode } from '../actions/drag';
import AppComponent from '../components/App';

const mapStateToProps = state => {
  return {
    isConnected: state.getIn(['app', 'isConnected']) && state.getIn(['app', 'isSameVersion']),
    isLeftPaneVisible: state.getIn(['leftPane', 'isVisible']),
    isRightPaneVisible: state.getIn(['rightPane', 'isVisible']),
    numSelectedLeft: state.getIn(['leftPane', 'selectedIndexes']).size,
    numSelectedRight: state.getIn(['rightPane', 'selectedIndexes']).size,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetDragMode: mode => dispatch(updateDragMode(mode)),
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;

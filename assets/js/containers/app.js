'use strict';

import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapStateToProps = state => {
  return {
    isRightPaneVisible: state.rightPane.isVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);

export default App;

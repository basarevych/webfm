'use strict';

import { connect } from 'react-redux';
import InfoView from '../components/InfoView';
import { setActivePane } from '../actions/pane';

const mapStateToProps = state => {
  return {
    isActive: state.leftPane.isActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('LEFT')),
  };
};

const LeftInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoView);

export default LeftInfo;

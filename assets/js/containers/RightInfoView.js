'use strict';

import { connect } from 'react-redux';
import InfoView from '../components/InfoView';
import { setActivePane } from '../actions/pane';

const mapStateToProps = state => {
  return {
    isActive: state.rightPane.isActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
  };
};

const RightInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoView);

export default RightInfo;

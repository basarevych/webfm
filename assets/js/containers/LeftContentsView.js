'use strict';

import { connect } from 'react-redux';
import ContentsView from '../components/ContentsView';
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

const LeftContents = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentsView);

export default LeftContents;

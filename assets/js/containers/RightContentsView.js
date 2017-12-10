'use strict';

import { connect } from 'react-redux';
import ContentsView from '../components/ContentsView';
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

const RightContents = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentsView);

export default RightContents;

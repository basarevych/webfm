'use strict';

import { connect } from 'react-redux';
import { setActivePane } from '../actions/pane';
import Pane from '../components/Pane';

const mapStateToProps = state => {
  return {
    which: 'RIGHT',
    mode: state.rightPane.mode,
    isActive: state.rightPane.isActive,
    isDisabled: !state.user.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPaneClick: () => dispatch(setActivePane('RIGHT')),
  };
};

const RightPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);

export default RightPane;

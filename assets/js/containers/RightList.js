'use strict';

import { connect } from 'react-redux';
import { paneCD } from '../actions/pane';
import ListView from '../components/ListView';

const mapStateToProps = state => {
  return {
    list: state.rightPane.list,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeDirectory: directory => dispatch(paneCD('RIGHT', null, directory)),
  };
};

const RightList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default RightList;

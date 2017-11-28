'use strict';

import { connect } from 'react-redux';
import { paneCD } from '../actions/pane';
import ListView from '../components/ListView';

const mapStateToProps = state => {
  return {
    list: state.leftPane.list,
    isDisabled: !state.status.isAuthorized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeDirectory: directory => dispatch(paneCD('LEFT', null, directory)),
  };
};

const LeftList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);

export default LeftList;

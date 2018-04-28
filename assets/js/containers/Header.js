'use strict';

import { connect } from 'react-redux';
import { paneCD, paneSort, setPaneMode, togglePane } from '../actions/pane';
import HeaderComponent from '../components/Header';

const mapStateToProps = (state, ownProps) => {
  let paneId = (ownProps.which === 'LEFT' ? 'leftPane' : 'rightPane');
  let otherId = (ownProps.which === 'LEFT' ? 'rightPane' : 'leftPane');

  return {
    breakpoint: state.getIn(['app', 'breakpoint']),
    shares: state.getIn(['user', 'shares']),
    share: state.getIn([paneId, 'share']),
    directory: state.getIn([paneId, 'directory']),
    mode: state.getIn([paneId, 'mode']),
    otherPath: state.getIn([otherId, 'path']),
    sortField: state.getIn([paneId, 'sortField']),
    sortDir: state.getIn([paneId, 'sortDir']),
    isOtherVisible: state.getIn([otherId, 'isVisible']),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let paneId = ownProps.which;
  let otherId = (ownProps.which === 'LEFT' ? 'RIGHT' : 'LEFT');

  return {
    onSetShare: share => dispatch(paneCD(paneId, share, '/')),
    onSetSort: (field, dir) => dispatch(paneSort(paneId, field, dir)),
    onSetMode: mode => dispatch(setPaneMode(paneId, mode)),
    onToggleOther: () => dispatch(togglePane(otherId)),
  };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default Header;

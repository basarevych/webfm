import { connect } from 'react-redux';
import ListBodyComponent from '../components/ListBody';

const mapStateToProps = (state, ownProps) => {
  let paneId = (ownProps.which === 'LEFT' ? 'leftPane' : 'rightPane');

  return {
    breakpoint: state.getIn(['app', 'breakpoint']),
    isForbidden: state.getIn([paneId, 'isForbidden']),
    listSize: state.getIn([paneId, 'list']).size,
  };
};

const ListBody = connect(mapStateToProps, null)(ListBodyComponent);
export default ListBody;

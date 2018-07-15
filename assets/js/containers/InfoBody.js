import { createSelector } from 'reselect/lib/index';
import { connect } from 'react-redux';
import InfoBodyComponent from '../components/InfoBody';

const getInfo = createSelector(
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'share']),
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'name']),
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'path']),
  state => state.get('infos'),
  (share, name, path, infos) => {
    if (!share || !name)
      return undefined;

    return infos.get(`${share}:${path}`);
  }
);

const mapStateToProps = (state, ownProps) => {
  return {
    info: getInfo(state, ownProps),
  };
};

const InfoBody = connect(mapStateToProps, null)(InfoBodyComponent);
export default InfoBody;

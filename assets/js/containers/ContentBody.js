'use strict';

import { createSelector } from 'reselect/lib/index';
import { connect } from 'react-redux';
import ContentBodyComponent from '../components/ContentBody';

const getContent = createSelector(
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'share']),
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'name']),
  (state, props) => state.getIn([props.which === 'LEFT' ? 'rightPane' : 'leftPane', 'path']),
  state => state.get('contents'),
  (share, name, path, contents) => {
    if (!share || !name)
      return undefined;

    return contents.get(`${share}:${path}`);
  }
);

const mapStateToProps = (state, ownProps) => {
  return {
    content: getContent(state, ownProps),
  };
};

const ContentBody = connect(mapStateToProps, null)(ContentBodyComponent);
export default ContentBody;

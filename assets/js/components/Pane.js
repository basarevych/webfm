'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import DisabledView from './DisabledView';
import LoadingView from './LoadingView';
import LeftListView from '../containers/LeftListView';
import RightListView from '../containers/RightListView';
import LeftContentsView from '../containers/LeftContentsView';
import RightContentsView from '../containers/RightContentsView';
import LeftInfoView from '../containers/LeftInfoView';
import RightInfoView from '../containers/RightInfoView';

class Pane extends React.Component {
  render() {
    let view = null;
    if (this.props.isDisabled) {
      view = <DisabledView isActive={this.props.isActive} onPaneClick={this.props.onPaneClick}/>;
    } else if (this.props.isLoading) {
      view = <LoadingView isActive={this.props.isActive} onPaneClick={this.props.onPaneClick}/>;
    } else {
      switch (this.props.mode) {
        case 'LIST':
          view = this.props.which === 'LEFT' ? <LeftListView /> : <RightListView />;
          break;
        case 'CONTENTS':
          view = this.props.which === 'LEFT' ? <LeftContentsView /> : <RightContentsView />;
          break;
        case 'INFO':
          view = this.props.which === 'LEFT' ? <LeftInfoView /> : <RightInfoView />;
          break;
      }
    }

    return (
      <div className="pane">
        {view}
      </div>
    );
  }
}

Pane.propTypes = {
  which: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default Pane;

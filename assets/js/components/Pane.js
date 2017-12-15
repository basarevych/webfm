'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import DisabledView from './DisabledView';
import LoadingView from './LoadingView';
import ListView from './ListView';
import ContentsView from './ContentsView';
import InfoView from './InfoView';

class Pane extends React.Component {
  render() {
    let view = null;
    if (this.props.isDisabled) {
      view = <DisabledView isActive={this.props.isActive} />;
    } else if (this.props.isLoading) {
      view = <LoadingView isActive={this.props.isActive} />;
    } else {
      switch (this.props.mode) {
        case 'LIST':
          view = (
            <ListView
              breakpoint={this.props.breakpoint}
              shares={this.props.shares}
              share={this.props.share}
              path={this.props.path}
              list={this.props.list}
              isActive={this.props.isActive}
              isForbidden={this.props.isForbidden}
              isOtherVisible={this.props.isOtherVisible}
              otherMode={this.props.otherMode}
              onSetShare={this.props.onSetShare}
              onChangeDirectory={this.props.onChangeDirectory}
              onToggleOther={this.props.onToggleOther}
              onSetOtherMode={this.props.onSetOtherMode}
            />
          );
          break;
        case 'CONTENTS':
          view = <ContentsView isActive={this.props.isActive} />;
          break;
        case 'INFO':
          view = <InfoView isActive={this.props.isActive} />;
          break;
      }
    }

    return (
      <div className="pane" onClick={this.props.onPaneClick}>
        {view}
      </div>
    );
  }
}

Pane.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  otherMode: PropTypes.string.isRequired,
  shares: PropTypes.array.isRequired,
  share: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
};

export default Pane;

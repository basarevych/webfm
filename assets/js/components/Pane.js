'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import DisabledView from './DisabledView';
import LoadingView from './LoadingView';
import Header from './Header';
import ListView from './ListView';
import ContentsView from './ContentsView';
import InfoView from './InfoView';

class Pane extends React.Component {
  render() {
    let view = null;
    if (this.props.isDisabled) {
      view = <DisabledView isActive={this.props.isActive}/>;
    } else if (this.props.isLoading) {
      view = <LoadingView isActive={this.props.isActive}/>;
    } else if (this.props.mode === 'CONTENTS') {
      view = <ContentsView isActive={this.props.isActive}/>;
    } else if (this.props.mode === 'INFO') {
      view = <InfoView isActive={this.props.isActive}/>;
    } else {
      view = (
        <div className={'view rounded' + (this.props.isActive ? ' active' : '')}>
          <Header
            breakpoint={this.props.breakpoint}
            shares={this.props.shares}
            share={this.props.share}
            path={this.props.path}
            mode={this.props.mode}
            otherMode={this.props.otherMode}
            sortField={this.props.sortField}
            sortDir={this.props.sortDir}
            isActive={this.props.isActive}
            isOtherVisible={this.props.isOtherVisible}
            onSetShare={this.props.onSetShare}
            onSetSort={this.props.onSetSort}
            onSetOtherMode={this.props.onSetOtherMode}
            onToggleOther={this.props.onToggleOther}
          />
          <ListView
            list={this.props.list}
            selected={this.props.selected}
            isForbidden={this.props.isForbidden}
            onChangeDirectory={this.props.onChangeDirectory}
            onNodeClick={this.props.onNodeClick}
            onNodeShiftClick={this.props.onNodeShiftClick}
            onNodeControlClick={this.props.onNodeControlClick}
          />
        </div>
      );
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
  selected: PropTypes.array.isRequired,
  sortField: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeShiftClick: PropTypes.func.isRequired,
  onNodeControlClick: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
};

export default Pane;

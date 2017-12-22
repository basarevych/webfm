'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';

class ListView extends React.Component {
  render() {
    let bodyClass;
    let listing;
    if (this.props.isForbidden) {
      bodyClass = 'body disabled';
      listing = __('forbidden_message');
    } else if (!this.props.list.length) {
      bodyClass = 'body disabled';
      listing = __('empty_message');
    } else {
      bodyClass = 'body';
      listing = (
        <ListComponent
          list={this.props.list}
          selected={this.props.selected}
          onChangeDirectory={this.props.onChangeDirectory}
          onNodeClick={this.props.onNodeClick}
          onNodeShiftClick={this.props.onNodeShiftClick}
          onNodeControlClick={this.props.onNodeControlClick}
        />
      );
    }

    return (
      <div className={bodyClass}>
        {listing}
      </div>
    );
  }
}

ListView.propTypes = {
  list: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeShiftClick: PropTypes.func.isRequired,
  onNodeControlClick: PropTypes.func.isRequired,
};

export default ListView;

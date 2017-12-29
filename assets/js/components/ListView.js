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
          share={this.props.share}
          list={this.props.list}
          sizes={this.props.sizes}
          selectedIndexes={this.props.selectedIndexes}
          onChangeDirectory={this.props.onChangeDirectory}
          onNodeClick={this.props.onNodeClick}
          onNodeShiftClick={this.props.onNodeShiftClick}
          onNodeControlClick={this.props.onNodeControlClick}
          onSizeClick={this.props.onSizeClick}
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
  share: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  sizes: PropTypes.object.isRequired,
  selectedIndexes: PropTypes.array.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeShiftClick: PropTypes.func.isRequired,
  onNodeControlClick: PropTypes.func.isRequired,
  onSizeClick: PropTypes.func.isRequired,
};

export default ListView;

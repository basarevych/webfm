'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ScrollWrapper from './ScrollWrapper';
import ListItem from './ListItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listing = [];
    for (let item of this.props.list) {
      listing.push(
        <ListItem
          key={item.id}
          isDisabled={this.props.isDisabled}
          node={item}
          onChangeDirectory={this.props.onChangeDirectory}
        />
      );
    }

    return (
      <ScrollWrapper>
        <div className="listing">
          {listing}
        </div>
      </ScrollWrapper>
    );
  }
}

ListView.propTypes = {
  list: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListView;

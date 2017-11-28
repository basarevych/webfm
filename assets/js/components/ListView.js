'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ScrollWrapper from './ScrollWrapper';
import ListItem from './ListItem';

const ListView = ({ isDisabled, list }) => {
  let listing = [];
  for (let item of list) {
    listing.push(
      <ListItem key={item.id} isDisabled={isDisabled} node={item} />
    );
  }

  return (
    <ScrollWrapper>
      <div className="listing">
        {listing}
      </div>
    </ScrollWrapper>
  );
};

ListView.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
};

export default ListView;

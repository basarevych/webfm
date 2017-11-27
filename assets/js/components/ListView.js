'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ScrollWrapper from './ScrollWrapper';

const ListView = ({ list }) => {
  let listing = [];
  for (let item of list) {
    listing.push(
      <div key={item.id}>{item.name}</div>
    );
  }

  return (
    <ScrollWrapper>
      {listing}
    </ScrollWrapper>
  );
};

ListView.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ListView;

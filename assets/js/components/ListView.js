'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';

const ListView = ({ isForbidden, list, onChangeDirectory }) => {
  let bodyClass;
  let listing;
  if (isForbidden) {
    bodyClass = 'body disabled';
    listing = __('forbidden_message');
  } else if (!list.length) {
    bodyClass = 'body disabled';
    listing = __('empty_message');
  } else {
    bodyClass = 'body';
    listing = <ListComponent list={list} onChangeDirectory={onChangeDirectory} />;
  }

  return (
    <div className={bodyClass}>
      {listing}
    </div>
  );
};

ListView.propTypes = {
  list: PropTypes.array.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListView;

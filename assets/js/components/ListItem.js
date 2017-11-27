'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ListItem = ({ isDisabled, node }) => {
  let icon;
  if (node.isDirectory)
    icon = <i className="fa fa-folder fa-mr" />;
  else
    icon = <i className="fa fa-file fa-mr" />;

  let size;
  if (node.isDirectory) {
    if (node.size < 0)
      size = <i className="fa fa-balance-scale" />;
    else
      size = node.size;

    size = (
      <Button
        size="sm"
        disabled={isDisabled}
        color="secondary"
      >
        {size}
      </Button>
    );
  } else {
    size = node.size;
  }

  return (
    <div className="list-item">
      <div className="name">
        <div className="fit-width">
          {icon}{node.name}
        </div>
      </div>
      <div className="size">
        {size}
      </div>
      <div className="tools">
        <Button
          size="sm"
          disabled={isDisabled}
          color="secondary"
        >
          <i className="fa fa-fw fa-copy" />
        </Button>
        &nbsp;
        <Button
          size="sm"
          disabled={isDisabled}
          color="secondary"
        >
          <i className="fa fa-fw fa-cut" />
        </Button>
        &nbsp;
        <Button
          size="sm"
          disabled={isDisabled}
          color="secondary"
        >
          <i className="fa fa-fw fa-remove" />
        </Button>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  node: PropTypes.object.isRequired,
};

export default ListItem;

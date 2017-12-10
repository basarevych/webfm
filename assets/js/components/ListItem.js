'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { join } from '../lib/path';
import { human } from '../lib/size';

const ListItem = ({ node, isDisabled, onChangeDirectory }) => {
  let icon;
  if (node.isDirectory)
    icon = <i className="fa fa-folder-o fa-mr" />;
  else
    icon = <i className="fa fa-file-o fa-mr" />;

  let name;
  if (node.isDirectory) {
    name = (
      <a
        className="link"
        onClick={() => onChangeDirectory(join(node.directory, node.name))}
      >
        {icon}
        {node.name}
      </a>
    );
  } else {
    name = (
      <span>
        {icon}
        {node.name}
      </span>
    );
  }

  let size;
  if (node.isDirectory) {
    if (node.size < 0)
      size = <i className="fa fa-balance-scale" />;
    else
      size = human(node.size);

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
    size = human(node.size);
  }

  return (
    <div className="listing-item">
      <div className="name">
        <div className="fit-width">
          {name}
        </div>
      </div>
      <div className="info">
        <div className="wrapper">
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
      </div>
    </div>
  );
};

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListItem;

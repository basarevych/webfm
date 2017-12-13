'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaFolderO, FaFileO, FaBalanceScale, FaCopy, FaCut, FaBan } from 'react-icons/lib/fa';
import { Button } from 'reactstrap';
import { join } from '../lib/path';
import { human } from '../lib/size';

const ListItem = ({ node, onChangeDirectory }) => {
  let icon;
  if (node.isDirectory)
    icon = <FaFolderO />;
  else
    icon = <FaFileO />;

  let name;
  if (node.isDirectory) {
    name = (
      <a
        className="link"
        onClick={() => onChangeDirectory(join(node.directory, node.name))}
      >
        {icon} {node.name}
      </a>
    );
  } else {
    name = (
      <span>
        {icon} {node.name}
      </span>
    );
  }

  let size;
  if (node.isDirectory) {
    if (node.size < 0)
      size = <FaBalanceScale />;
    else
      size = human(node.size);

    size = (
      <Button
        size="sm"
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
            <Button size="sm" color="secondary">
              <FaCopy />
            </Button>
            &nbsp;
            <Button size="sm" color="secondary">
              <FaCut />
            </Button>
            &nbsp;
            <Button size="sm" color="secondary">
              <FaBan />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListItem;

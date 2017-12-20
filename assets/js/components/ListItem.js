'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaFolderO, FaFileO, FaBalanceScale, FaCopy, FaCut, FaTrash } from 'react-icons/lib/fa';
import { Button } from 'reactstrap';
import { join } from '../lib/path';
import { human } from '../lib/size';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isHovered: false };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter() {
    this.setState({ isHovered: true });
  }

  handleLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    let icon;
    if (this.props.node.isDirectory)
      icon = <FaFolderO />;
    else
      icon = <FaFileO />;

    let name;
    if (this.props.node.isDirectory) {
      name = (
        <a
          className="link"
          onClick={() => this.props.onChangeDirectory(join(this.props.node.directory, this.props.node.name))}
        >
          <strong>{icon} {this.props.node.name}</strong>
        </a>
      );
    } else {
      name = (
        <span>
        {icon} {this.props.node.name}
      </span>
      );
    }

    let size;
    if (this.props.node.isDirectory) {
      if (this.props.node.size < 0)
        size = <FaBalanceScale />;
      else
        size = human(this.props.node.size);

      size = (
        <Button
          size="sm"
          color="secondary"
        >
          {size}
        </Button>
      );
    } else {
      size = human(this.props.node.size);
    }

    return (
      <div
        className={'listing-item ' + (this.state.isHovered ? ' hovered' : (this.props.index % 2 ? 'odd' : 'even'))}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
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
                <FaTrash />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListItem;

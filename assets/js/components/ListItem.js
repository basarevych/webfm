'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaFolderO, FaFileO, FaBalanceScale, FaCopy, FaCut, FaTrash, FaCog } from 'react-icons/lib/fa';
import { Button } from 'reactstrap';
import { join } from '../lib/path';
import { human } from '../lib/size';

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { isHovered: false };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleEnter() {
    this.setState({ isHovered: true });
  }

  handleLeave() {
    this.setState({ isHovered: false });
  }

  handleNameClick(e) {
    e.stopPropagation();
    this.props.onChangeDirectory(join(this.props.node.directory, this.props.node.name));
  }

  handleItemClick(e) {
    if (this.props.node.name === '..')
      return;

    if (e.shiftKey)
      this.props.onNodeShiftClick(this.props.index);
    else if (e.ctrlKey)
      this.props.onNodeControlClick(this.props.index);
    else
      this.props.onNodeClick(this.props.index);
  }

  render() {
    let icon;
    if (this.props.node.isDirectory)
      icon = <FaFolderO />;
    else
      icon = <FaFileO />;

    let name = (
      <span>
        {icon} {this.props.node.name}
        {this.props.node.target && (' ⇨ ' + this.props.node.target)}
      </span>
    );
    if (this.props.node.isDirectory) {
      name = (
        <a className="link" onClick={this.handleNameClick}>
          <strong>{name}</strong>
        </a>
      );
    }

    let size;
    if (this.props.node.isDirectory) {
      if (this.props.size && !this.props.size.isForbidden) {
        if (this.props.size.isLoading)
          size = <FaCog className="rotating" />;
        else
          size = human(this.props.size.du);
      } else {
        size = <FaBalanceScale />;
      }

      size = (
        <Button size="sm" color={this.props.isSelected ? 'primary' : 'secondary'} onClick={this.props.onSizeClick}>
          {size}
        </Button>
      );
    } else {
      size = human(this.props.node.size);
    }

    let aux = null;
    if (this.props.node.name === '..') {
      aux = (
        <div className="wrapper">
          <div className="size">
            <em>{__('two_dots_label')}</em>
          </div>
        </div>
      );
    } else {
      aux = (
        <div className="wrapper">
          <div className="size">
            {size}
          </div>
          <div className="tools">
            <Button size="sm" color={this.props.isSelected ? 'primary' : 'secondary'} onClick={() => this.props.onCopyClick(this.props.node.name)}>
              <FaCopy />
            </Button>
            {' '}
            <Button size="sm" color={this.props.isSelected ? 'primary' : 'secondary'} onClick={() => this.props.onMoveClick(this.props.node.name)}>
              <FaCut />
            </Button>
            {' '}
            <Button size="sm" color={this.props.isSelected ? 'primary' : 'secondary'} onClick={() => this.props.onDeleteClick(this.props.node.name)}>
              <FaTrash />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div
        className={
          'listing-item' + (this.props.isSelected ? ' selected' : '') +
          (this.state.isHovered
            ? ' hovered'
            : (this.props.index % 2 ? ' odd' : ' even'))
        }
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
        onClick={this.handleItemClick}
      >
        <div className="name">
          <div className="fit-width">
            {name}
          </div>
        </div>
        <div className="info">
          {aux}
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  size: PropTypes.object,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeShiftClick: PropTypes.func.isRequired,
  onNodeControlClick: PropTypes.func.isRequired,
  onSizeClick: PropTypes.func.isRequired,
  onCopyClick: PropTypes.func.isRequired,
  onMoveClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ListItem;

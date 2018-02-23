'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { DragSource } from 'react-dnd';
import { FaFolderO, FaFileO, FaBalanceScale, FaCopy, FaCut, FaTrash, FaCog } from 'react-icons/lib/fa';
import { Button } from 'reactstrap';
import { Tooltip } from 'reactstrap';
import { join } from '../lib/path';
import { human } from '../lib/size';
import * as dragTypes from '../constants/dragTypes';

const nodeSource = {
  beginDrag(props) {
    return {
      pane: props.which,
      name: props.node.get('name'),
      isSelected: props.isSelected,
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(dragTypes.NODE, nodeSource, collect)
class ListItem extends React.PureComponent {
  static propTypes = {
    which: PropTypes.string.isRequired,
    node: PropTypes.instanceOf(Map).isRequired,
    size: PropTypes.instanceOf(Map),
    index: PropTypes.number.isRequired,
    connectDragSource: PropTypes.func,
    isSelected: PropTypes.bool.isRequired,
    isDragging: PropTypes.bool,
    onChangeDirectory: PropTypes.func.isRequired,
    onNodeClick: PropTypes.func.isRequired,
    onNodeShiftClick: PropTypes.func.isRequired,
    onNodeControlClick: PropTypes.func.isRequired,
    onSizeClick: PropTypes.func.isRequired,
    onCopyClick: PropTypes.func.isRequired,
    onMoveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onDrag: PropTypes.func.isRequired,
  };

  static defaultProps = {
    size: Map({}),
    connectDragSource: arg => arg,
    isDragging: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      isSizeTooltipOpen: false,
      isCopyTooltipOpen: false,
      isMoveTooltipOpen: false,
      isDeleteTooltipOpen: false,
    };

    this.toggleSizeTooltip = this.toggleSizeTooltip.bind(this);
    this.toggleCopyTooltip = this.toggleCopyTooltip.bind(this);
    this.toggleMoveTooltip = this.toggleMoveTooltip.bind(this);
    this.toggleDeleteTooltip = this.toggleDeleteTooltip.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.props.onDrag(nextProps.which, nextProps.isDragging, nextProps.isSelected);
  }

  toggleSizeTooltip() {
    this.setState({ isSizeTooltipOpen: !this.state.isSizeTooltipOpen });
  }

  toggleCopyTooltip() {
    this.setState({ isCopyTooltipOpen: !this.state.isCopyTooltipOpen });
  }

  toggleMoveTooltip() {
    this.setState({ isMoveTooltipOpen: !this.state.isMoveTooltipOpen });
  }

  toggleDeleteTooltip() {
    this.setState({ isDeleteTooltipOpen: !this.state.isDeleteTooltipOpen });
  }

  handleEnter() {
    this.setState({ isHovered: true });
  }

  handleLeave() {
    this.setState({ isHovered: false });
  }

  handleNameClick(e) {
    e.stopPropagation();
    this.props.onChangeDirectory(join(this.props.node.get('directory'), this.props.node.get('name')));
  }

  handleItemClick(e) {
    if (this.props.node.get('name') === '..')
      return;

    if (e.shiftKey)
      this.props.onNodeShiftClick(this.props.index);
    else if (e.ctrlKey)
      this.props.onNodeControlClick(this.props.index);
    else
      this.props.onNodeClick(this.props.index);
  }

  render() {
    let icon = (this.props.node.get('isDirectory') ? <FaFolderO /> : <FaFileO />);

    let name = (
      <span>
        {icon} {this.props.node.get('name')}
        {this.props.node.get('target') && (' ⇨ ' + this.props.node.get('target'))}
      </span>
    );
    if (this.props.node.get('isDirectory')) {
      name = (
        <a className="link" onClick={this.handleNameClick}>
          <strong>{name}</strong>
        </a>
      );
    }

    let size;
    if (this.props.node.get('isDirectory')) {
      if (this.props.size.size && !this.props.size.get('isForbidden'))
        size = (this.props.size.get('isLoading') ? <FaCog className="rotating" /> : human(this.props.size.get('du')));
      else
        size = <FaBalanceScale />;

      size = (
        <div>
          <Button
            size="sm"
            color={this.props.isSelected ? 'primary' : 'secondary'}
            onClick={this.props.onSizeClick}
            ref={el => { this.sizeButton = el && ReactDOM.findDOMNode(el); }}
          >
            {size}
          </Button>
          {this.sizeButton && <Tooltip
            placement="bottom"
            target={() => this.sizeButton}
            isOpen={this.state.isSizeTooltipOpen}
            toggle={this.toggleSizeTooltip}
            dangerouslySetInnerHTML={{ __html: __('size_button_hint') }}
          />}
        </div>
      );
    } else {
      size = human(this.props.node.get('size'));
    }

    let aux = null;
    if (this.props.node.get('name') === '..') {
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
            <Button
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={() => this.props.onCopyClick(this.props.node.get('name'))}
              ref={el => { this.copyButton = el && ReactDOM.findDOMNode(el); }}
            >
              <FaCopy />
            </Button>
            {this.copyButton && <Tooltip
              placement="bottom"
              target={() => this.copyButton}
              isOpen={this.state.isCopyTooltipOpen}
              toggle={this.toggleCopyTooltip}
              dangerouslySetInnerHTML={{ __html: __('copy_button_hint') }}
            />}
            {' '}
            <Button
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={() => this.props.onMoveClick(this.props.node.get('name'))}
              ref={el => { this.moveButton = el && ReactDOM.findDOMNode(el); }}
            >
              <FaCut />
            </Button>
            {this.moveButton && <Tooltip
              placement="bottom"
              target={() => this.moveButton}
              isOpen={this.state.isMoveTooltipOpen}
              toggle={this.toggleMoveTooltip}
              dangerouslySetInnerHTML={{ __html: __('move_button_hint') }}
            />}
            {' '}
            <Button
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={() => this.props.onDeleteClick(this.props.node.get('name'))}
              ref={el => { this.deleteButton = el && ReactDOM.findDOMNode(el); }}
            >
              <FaTrash />
            </Button>
            {this.deleteButton && <Tooltip
              placement="bottom"
              target={() => this.deleteButton}
              isOpen={this.state.isDeleteTooltipOpen}
              toggle={this.toggleDeleteTooltip}
              dangerouslySetInnerHTML={{ __html: __('delete_button_hint') }}
            />}
          </div>
        </div>
      );
    }

    return this.props.connectDragSource(
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

export default ListItem;

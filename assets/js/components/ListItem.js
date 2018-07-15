import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { DragSource } from 'react-dnd';
import { FaFolderO, FaFileO, FaBalanceScale, FaCopy, FaCut, FaTrash, FaCog } from 'react-icons/lib/fa';
import HintedButton from './HintedButton';
import { join } from '../lib/path';
import { human } from '../lib/size';
import * as dragTypes from '../constants/dragTypes';

const nodeSource = {
  beginDrag(props) {
    props.onDrag(props.which, true, props.isSelected);
    return {
      pane: props.which,
      name: props.node.get('name'),
      isSelected: props.isSelected,
    };
  },
  endDrag(props) {
    props.onDrag(props.which, false, props.isSelected);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

@DragSource(dragTypes.NODE, nodeSource, collect)
class ListItem extends React.Component {
  static propTypes = {
    which: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    share: PropTypes.string.isRequired,
    node: PropTypes.instanceOf(Map),
    size: PropTypes.instanceOf(Map),
    connectDragSource: PropTypes.func,
    isSelected: PropTypes.bool,
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
    isSelected: false,
    isDragging: false,
  };

  constructor(props) {
    super(props);

    this.isKilled = !props.node;
    this.state = {
      isSizeTooltipOpen: false,
      isCopyTooltipOpen: false,
      isMoveTooltipOpen: false,
      isDeleteTooltipOpen: false,
    };

    this.toggleSizeTooltip = this.toggleSizeTooltip.bind(this);
    this.toggleCopyTooltip = this.toggleCopyTooltip.bind(this);
    this.toggleMoveTooltip = this.toggleMoveTooltip.bind(this);
    this.toggleDeleteTooltip = this.toggleDeleteTooltip.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleSizeClick = this.handleSizeClick.bind(this);
    this.handleCopyClick = this.handleCopyClick.bind(this);
    this.handleMoveClick = this.handleMoveClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentWillUnmount() {
    this.selfKill();
  }

  selfKill() {
    this.isKilled = true;
    this.setState({
      isSizeTooltipOpen: false,
      isCopyTooltipOpen: false,
      isMoveTooltipOpen: false,
      isDeleteTooltipOpen: false,
    });
  }

  toggleSizeTooltip() {
    if (!this.isKilled)
      this.setState({ isSizeTooltipOpen: !this.state.isSizeTooltipOpen });
  }

  toggleCopyTooltip() {
    if (!this.isKilled)
      this.setState({ isCopyTooltipOpen: !this.state.isCopyTooltipOpen });
  }

  toggleMoveTooltip() {
    if (!this.isKilled)
      this.setState({ isMoveTooltipOpen: !this.state.isMoveTooltipOpen });
  }

  toggleDeleteTooltip() {
    if (!this.isKilled)
      this.setState({ isDeleteTooltipOpen: !this.state.isDeleteTooltipOpen });
  }

  handleNameClick(e) {
    e.stopPropagation();
    if (!this.isKilled)
      this.props.onChangeDirectory(join(this.props.node.get('directory'), this.props.node.get('name')));
  }

  handleItemClick(e) {
    if (this.isKilled || this.props.node.get('name') === '..')
      return;

    if (e.shiftKey)
      this.props.onNodeShiftClick(this.props.index);
    else if (e.ctrlKey)
      this.props.onNodeControlClick(this.props.index);
    else
      this.props.onNodeClick(this.props.index);
  }

  handleSizeClick() {
    if (!this.isKilled)
      this.props.onSizeClick(this.props.share, this.props.node.get('path'));
  }

  handleCopyClick() {
    if (!this.isKilled)
      this.props.onCopyClick(this.props.node.get('name'));
  }

  handleMoveClick() {
    if (!this.isKilled)
      this.props.onMoveClick(this.props.node.get('name'));
  }

  handleDeleteClick() {
    if (!this.isKilled)
      this.props.onDeleteClick(this.props.node.get('name'));
  }

  render() {
    if (this.isKilled)
      return null;

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
    name = (
      <div className="name">
        {name}
      </div>
    );

    let size;
    if (this.props.node.get('isDirectory')) {
      if (this.props.size.size && !this.props.size.get('isForbidden'))
        size = (this.props.size.get('isLoading') ? <FaCog className="rotating" /> : human(this.props.size.get('du')));
      else
        size = <FaBalanceScale />;

      size = (
        <HintedButton
          id={this.props.which + '-node-' + this.props.index + '-size'}
          size="sm"
          color={this.props.isSelected ? 'primary' : 'secondary'}
          onClick={this.handleSizeClick}
          tooltipPlacement="bottom"
          tooltipIsOpen={this.state.isSizeTooltipOpen}
          tooltipToggle={this.toggleSizeTooltip}
          tooltipHTML={__('size_button_hint')}
        >
          {size}
        </HintedButton>
      );
    } else {
      size = human(this.props.node.get('size'));
    }

    let info = null;
    if (this.props.node.get('name') === '..') {
      info = (
        <div className="info">
          <span className="size"><em>{__('two_dots_label')}</em></span>
        </div>
      );
    } else {
      info = (
        <div className="info">
          <span className="size">
            {size}
          </span>
          <span className="tools">
            <HintedButton
              id={this.props.which + '-node-' + this.props.index + '-copy'}
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={this.handleCopyClick}
              tooltipPlacement="bottom"
              tooltipIsOpen={this.state.isCopyTooltipOpen}
              tooltipToggle={this.toggleCopyTooltip}
              tooltipHTML={__('copy_button_hint')}
            >
              <FaCopy />
            </HintedButton>
            {' '}
            <HintedButton
              id={this.props.which + '-node-' + this.props.index + '-move'}
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={this.handleMoveClick}
              tooltipPlacement="bottom"
              tooltipIsOpen={this.state.isMoveTooltipOpen}
              tooltipToggle={this.toggleMoveTooltip}
              tooltipHTML={__('move_button_hint')}
            >
              <FaCut />
            </HintedButton>
            {' '}
            <HintedButton
              id={this.props.which + '-node-' + this.props.index + '-delete'}
              size="sm"
              color={this.props.isSelected ? 'primary' : 'secondary'}
              onClick={this.handleDeleteClick}
              tooltipPlacement="bottom"
              tooltipIsOpen={this.state.isDeleteTooltipOpen}
              tooltipToggle={this.toggleDeleteTooltip}
              tooltipHTML={__('delete_button_hint')}
            >
              <FaTrash />
            </HintedButton>
          </span>
        </div>
      );
    }

    return this.props.connectDragSource(
      <div
        className={
          'listing-row' +
          (this.props.isSelected ? ' selected' : '') +
          (this.props.index % 2 ? ' odd' : ' even')
        }
        onClick={this.handleItemClick}
      >
        {name}
        {info}
      </div>
    );
  }
}

export default ListItem;

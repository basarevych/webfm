'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import { DropTarget } from 'react-dnd';
import { List, Map } from 'immutable';
import DisabledView from './DisabledView';
import LoadingView from './LoadingView';
import Header from './Header';
import ListView from './ListView';
import ContentView from './ContentView';
import InfoView from './InfoView';
import * as dragTypes from '../constants/dragTypes';

const paneTarget = {
  drop(props, monitor) {
    let item = monitor.getItem();
    props.onDrop(item.pane, item.name, item.isSelected);
  },
  canDrop(props, monitor) {
    return monitor.getItem().pane !== props.which;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isDraggingNode: monitor.canDrop(),
    isDraggedOver: monitor.canDrop() && monitor.isOver(),
  };
}

@DropTarget(dragTypes.NODE, paneTarget, collect)
class Pane extends React.PureComponent {
  static propTypes = {
    which: PropTypes.string.isRequired,
    breakpoint: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    otherPath: PropTypes.string.isRequired,
    shares: PropTypes.instanceOf(List).isRequired,
    share: PropTypes.string.isRequired,
    directory: PropTypes.string.isRequired,
    list: PropTypes.instanceOf(List).isRequired,
    sizes: PropTypes.instanceOf(Map).isRequired,
    selectedIndexes: PropTypes.instanceOf(List).isRequired,
    sortField: PropTypes.string.isRequired,
    sortDir: PropTypes.string.isRequired,
    content: PropTypes.instanceOf(Map),
    info: PropTypes.instanceOf(Map),
    connectDropTarget: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isForbidden: PropTypes.bool.isRequired,
    isOtherVisible: PropTypes.bool.isRequired,
    isDraggingNode: PropTypes.bool,
    isDraggedOver: PropTypes.bool,
    isOtherDragging: PropTypes.bool.isRequired,
    isOtherDraggingSelected: PropTypes.bool.isRequired,
    isOtherDraggingCopy: PropTypes.bool.isRequired,
    onPaneClick: PropTypes.func.isRequired,
    onSetShare: PropTypes.func.isRequired,
    onSetSort: PropTypes.func.isRequired,
    onChangeDirectory: PropTypes.func.isRequired,
    onNodeClick: PropTypes.func.isRequired,
    onNodeShiftClick: PropTypes.func.isRequired,
    onNodeControlClick: PropTypes.func.isRequired,
    onSizeClick: PropTypes.func.isRequired,
    onToggleOther: PropTypes.func.isRequired,
    onSetMode: PropTypes.func.isRequired,
    onCopyClick: PropTypes.func.isRequired,
    onMoveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onDrag: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
  };

  static defaultProps = {
    content: Map({}),
    info: Map({}),
    connectDropTarget: arg => arg,
    isDraggingNode: false,
    isDraggedOver: false,
  };

  render() {
    let view = null;
    if (this.props.isDisabled) {
      view = <DisabledView isActive={this.props.isActive}/>;
    } else if (this.props.isLoading) {
      view = <LoadingView isActive={this.props.isActive}/>;
    } else {
      if (this.props.mode === 'CONTENTS') {
        view = <ContentView content={this.props.content} />;
      } else if (this.props.mode === 'INFO') {
        view = <InfoView info={this.props.info} />;
      } else {
        view = (
          <ListView
            which={this.props.which}
            share={this.props.share}
            directory={this.props.directory}
            list={this.props.list}
            sizes={this.props.sizes}
            selectedIndexes={this.props.selectedIndexes}
            isForbidden={this.props.isForbidden}
            onChangeDirectory={this.props.onChangeDirectory}
            onNodeClick={this.props.onNodeClick}
            onNodeShiftClick={this.props.onNodeShiftClick}
            onNodeControlClick={this.props.onNodeControlClick}
            onSizeClick={this.props.onSizeClick}
            onCopyClick={this.props.onCopyClick}
            onMoveClick={this.props.onMoveClick}
            onDeleteClick={this.props.onDeleteClick}
            onDrag={this.props.onDrag}
          />
        );
      }
      view = (
        <div
          className={'view rounded' +
            (this.props.isDraggedOver
              ? ' drop-ready'
              : (this.props.isDraggingNode
                ? ' drop-alert'
                : (this.props.isActive
                  ? ' active'
                  : '')))
          }
        >
          <Header
            breakpoint={this.props.breakpoint}
            shares={this.props.shares}
            share={this.props.share}
            directory={this.props.directory}
            mode={this.props.mode}
            otherPath={this.props.otherPath}
            sortField={this.props.sortField}
            sortDir={this.props.sortDir}
            isOtherVisible={this.props.isOtherVisible}
            onSetShare={this.props.onSetShare}
            onSetSort={this.props.onSetSort}
            onSetMode={this.props.onSetMode}
            onToggleOther={this.props.onToggleOther}
          />
          {view}
        </div>
      );
    }

    return this.props.connectDropTarget(
      <div id={this.props.which + '-pane'} className="pane" onClick={this.props.onPaneClick}>
        {view}
        <Tooltip
          placement="top"
          target={this.props.which + '-pane'}
          isOpen={this.props.isOtherDragging && !this.props.isOtherDraggingSelected && this.props.isOtherDraggingCopy}
          toggle={this.togglePaneTooltip}
          dangerouslySetInnerHTML={{ __html: __('copy_drop_hint') }}
        />
        <Tooltip
          placement="top"
          target={this.props.which + '-pane'}
          isOpen={this.props.isOtherDragging && this.props.isOtherDraggingSelected && this.props.isOtherDraggingCopy}
          toggle={this.togglePaneTooltip}
          dangerouslySetInnerHTML={{ __html: __('copy_drop_selected_hint') }}
        />
        <Tooltip
          placement="top"
          target={this.props.which + '-pane'}
          isOpen={this.props.isOtherDragging && !this.props.isOtherDraggingSelected && !this.props.isOtherDraggingCopy}
          toggle={this.togglePaneTooltip}
          dangerouslySetInnerHTML={{ __html: __('move_drop_hint') }}
        />
        <Tooltip
          placement="top"
          target={this.props.which + '-pane'}
          isOpen={this.props.isOtherDragging && this.props.isOtherDraggingSelected && !this.props.isOtherDraggingCopy}
          toggle={this.togglePaneTooltip}
          dangerouslySetInnerHTML={{ __html: __('move_drop_selected_hint') }}
        />
      </div>
    );
  }
}

export default Pane;

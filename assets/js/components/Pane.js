import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';
import { DropTarget } from 'react-dnd';
import DisabledBody from './DisabledBody';
import LoadingBody from './LoadingBody';
import Header from '../containers/Header';
import ContentBody from '../containers/ContentBody';
import InfoBody from '../containers/InfoBody';
import ListBody from '../containers/ListBody';
import * as dragTypes from '../constants/dragTypes';

const paneTarget = {
  drop(props, monitor) {
    let item = monitor.getItem();
    props.onDrop(item.pane, item.name, item.isSelected);
  },
  canDrop(props, monitor) {
    return monitor.getItem().pane !== props.which && props.mode === 'LIST';
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
class Pane extends React.Component {
  static propTypes = {
    which: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    breakpoint: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isOtherDragging: PropTypes.bool.isRequired,
    isOtherDraggingSelected: PropTypes.bool.isRequired,
    isOtherDraggingCopy: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func,
    isDraggingNode: PropTypes.bool,
    isDraggedOver: PropTypes.bool,
    onDrop: PropTypes.func.isRequired,
    onPaneClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    connectDropTarget: arg => arg,
    isDraggingNode: false,
    isDraggedOver: false,
  };

  render() {
    let header = null;
    let body = null;
    if (this.props.isDisabled) {
      body = <DisabledBody />;
    } else if (this.props.isLoading) {
      body = <LoadingBody />;
    } else {
      if (this.props.mode === 'CONTENTS')
        body = <ContentBody which={this.props.which} />;
      else if (this.props.mode === 'INFO')
        body = <InfoBody which={this.props.which} />;
      else
        body = <ListBody which={this.props.which} />;

      header = (
        <React.Fragment>
          <Header which={this.props.which} />
          <Tooltip
            placement={this.props.breakpoint === 'xs' ? 'top' : (this.props.which === 'LEFT' ? 'right' : 'left')}
            target={this.props.which + '-view'}
            isOpen={
              this.props.mode === 'LIST' &&
              this.props.isOtherDragging &&
              !this.props.isOtherDraggingSelected &&
              this.props.isOtherDraggingCopy
            }
            dangerouslySetInnerHTML={{ __html: __('copy_drop_hint') }}
          />
          <Tooltip
            placement={this.props.breakpoint === 'xs' ? 'top' : (this.props.which === 'LEFT' ? 'right' : 'left')}
            target={this.props.which + '-view'}
            isOpen={
              this.props.mode === 'LIST' &&
              this.props.isOtherDragging &&
              this.props.isOtherDraggingSelected &&
              this.props.isOtherDraggingCopy
            }
            dangerouslySetInnerHTML={{ __html: __('copy_drop_selected_hint') }}
          />
          <Tooltip
            placement={this.props.breakpoint === 'xs' ? 'top' : (this.props.which === 'LEFT' ? 'right' : 'left')}
            target={this.props.which + '-view'}
            isOpen={
              this.props.mode === 'LIST' &&
              this.props.isOtherDragging &&
              !this.props.isOtherDraggingSelected &&
              !this.props.isOtherDraggingCopy
            }
            dangerouslySetInnerHTML={{ __html: __('move_drop_hint') }}
          />
          <Tooltip
            placement={this.props.breakpoint === 'xs' ? 'top' : (this.props.which === 'LEFT' ? 'right' : 'left')}
            target={this.props.which + '-view'}
            isOpen={
              this.props.mode === 'LIST' &&
              this.props.isOtherDragging &&
              this.props.isOtherDraggingSelected &&
              !this.props.isOtherDraggingCopy
            }
            dangerouslySetInnerHTML={{ __html: __('move_drop_selected_hint') }}
          />
          <Tooltip
            placement={this.props.breakpoint === 'xs' ? 'top' : (this.props.which === 'LEFT' ? 'right' : 'left')}
            target={this.props.which + '-view'}
            isOpen={
              this.props.mode !== 'LIST' &&
              this.props.isOtherDragging
            }
            dangerouslySetInnerHTML={{ __html: __('switch_to_list_hint') }}
          />
        </React.Fragment>
      );
    }

    return this.props.connectDropTarget(
      <div className="pane" onClick={this.props.onPaneClick}>
        <div
          id={this.props.which + '-view'}
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
          {header}
          {body}
        </div>
      </div>
    );
  }
}

export default Pane;

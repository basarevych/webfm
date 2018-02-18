'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import ReactList from 'react-list';
import Viewport from './ScrollViewport';
import ListItem from './ListItem';
import { join } from '../lib/path';

class ListComponent extends React.PureComponent {
  static propTypes = {
    which: PropTypes.string.isRequired,
    share: PropTypes.string.isRequired,
    directory: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    sizes: PropTypes.object.isRequired,
    selectedIndexes: PropTypes.array.isRequired,
    onChangeDirectory: PropTypes.func.isRequired,
    onNodeClick: PropTypes.func.isRequired,
    onNodeShiftClick: PropTypes.func.isRequired,
    onNodeControlClick: PropTypes.func.isRequired,
    onSizeClick: PropTypes.func.isRequired,
    onCopyClick: PropTypes.func.isRequired,
    onMoveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { initialIndex: 0 };

    this.renderItem = this.renderItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  renderItem(index, key) {
    let node = this.props.list[index];
    return (
      <ListItem
        which={this.props.which}
        key={key}
        node={node}
        size={this.props.sizes[`${this.props.share}:${node.path}`]}
        index={index}
        isSelected={this.props.selectedIndexes.includes(index)}
        onChangeDirectory={this.props.onChangeDirectory}
        onNodeClick={this.props.onNodeClick}
        onNodeShiftClick={this.props.onNodeShiftClick}
        onNodeControlClick={this.props.onNodeControlClick}
        onSizeClick={() => this.props.onSizeClick(this.props.share, node.path)}
        onCopyClick={this.props.onCopyClick}
        onMoveClick={this.props.onMoveClick}
        onDeleteClick={this.props.onDeleteClick}
      />
    );
  }

  renderTable(items, ref) {
    return (
      <div className="listing" ref={ref}>
        {items}
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')));
  }

  componentWillReceiveProps(nextProps) {
    if (this.list && nextProps.share === this.props.share && nextProps.directory === this.props.directory) {
      let [first] = this.list.getVisibleRange();
      this.setState({ initialIndex: first || 0 });
    } else {
      this.setState({ initialIndex: 0 });
    }
  }

  render() {
    return (
      <div className="scroll-wrapper">
        <GenericScrollBox permitHandleDragInterruption={false}>
          <Viewport reactList={true}>
            <ReactList
              length={this.props.list.length}
              minSize={100}
              initialIndex={this.state.initialIndex}
              itemRenderer={this.renderItem}
              itemsRenderer={this.renderTable}
              type='uniform'
              useTranslate3d={true}
              ref={el => { this.list = el; }}
            />
          </Viewport>
        </GenericScrollBox>
      </div>
    );
  }
}

export default ListComponent;

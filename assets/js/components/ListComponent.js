'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import ReactList from 'react-list';
import Viewport from './ScrollViewport';
import ListItem from './ListItem';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  renderItem(index, key) {
    return (
      <ListItem
        key={key}
        node={this.props.list[index]}
        index={index}
        isSelected={this.props.selectedIndexes.includes(index)}
        onChangeDirectory={this.props.onChangeDirectory}
        onNodeClick={this.props.onNodeClick}
        onNodeShiftClick={this.props.onNodeShiftClick}
        onNodeControlClick={this.props.onNodeControlClick}
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

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.list, this.props.list) || !_.isEqual(nextProps.selectedIndexes, this.props.selectedIndexes);
  }

  render() {
    return (
      <div className="scroll-wrapper">
        <GenericScrollBox permitHandleDragInterruption={false}>
          <Viewport reactList={true}>
            <ReactList
              length={this.props.list.length}
              minSize={typeof window === 'undefined' ? 100 : 1}
              itemRenderer={this.renderItem}
              itemsRenderer={this.renderTable}
              type='uniform'
              useTranslate3d={true}
            />
          </Viewport>
        </GenericScrollBox>
      </div>
    );
  }
}

ListComponent.propTypes = {
  list: PropTypes.array.isRequired,
  selectedIndexes: PropTypes.array.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  onNodeShiftClick: PropTypes.func.isRequired,
  onNodeControlClick: PropTypes.func.isRequired,
};

export default ListComponent;

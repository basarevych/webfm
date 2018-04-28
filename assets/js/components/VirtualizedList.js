'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from 'react-virtualized';

class VirtualizedList extends React.PureComponent {
  static propTypes = {
    breakpoint: PropTypes.string,
    rows: PropTypes.array,
    size: PropTypes.number,
    getRow: PropTypes.func,
  };

  static defaultProps = {
    rows: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.breakpoint === nextProps.breakpoint)
      return null;

    return {
      breakpoint: nextProps.breakpoint,
      rowHeight: 0,
    };
  }

  constructor(props) {
    super(props);

    this.list = null;
    this.state = {
      breakpoint: props.breakpoint,
      rowHeight: 0,
    };

    this.setList = this.setList.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  setList(el) {
    this.list = el;
  }

  updateHeights(testRow) {
    let state = {};

    if (testRow && !this.state.rowHeight)
      state.rowHeight = _.reduce(testRow.children, (prev, cur) => Math.max(prev, cur.offsetHeight), 0);

    if (_.keys(state).length) {
      this.setState(state, () => {
        if (this.list)
          this.list.recomputeRowHeights();
      });
    }
  }

  renderRow(props) {
    let ref = this.state.rowHeight ? undefined : el => this.updateHeights(el);
    if (this.props.getRow)
      return this.props.getRow(props.index, props.key, props.style, ref);

    return (
      <div
        className="ReactVirtualized__List__row"
        key={props.key}
        style={props.style}
        ref={ref}
      >
        {this.props.rows[props.index]}
      </div>
    );
  }

  render() {
    return (
      <AutoSizer>
        {({ width, height }) => (
          <List
            key={this.props.breakpoint}
            width={width}
            height={height}
            rowHeight={() => this.state.rowHeight || 100}
            rowCount={this.props.getRow ? this.props.size : this.props.rows.length}
            rowRenderer={this.renderRow}
            ref={this.setList}
          />
        )}
      </AutoSizer>
    );
  }
}

export default VirtualizedList;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactList from 'react-list';
import ListItem from './ListItem';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  componentDidMount() {
    setTimeout(() => window.dispatchEvent(new Event('resize')));
  }

  renderItem(index, key) {
    let item = this.props.list[index];
    return (
      <ListItem
        key={key}
        node={item}
        onChangeDirectory={this.props.onChangeDirectory}
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

  render() {
    return (
      <div className="scroll-wrapper">
        <div className="scroll-box">
          <ReactList
            length={this.props.list.length}
            itemRenderer={this.renderItem}
            itemsRenderer={this.renderTable}
            type='uniform'
            ref={el => { this.scroll = el; }}
          />
        </div>
      </div>
    );
  }
}

ListComponent.propTypes = {
  list: PropTypes.array.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListComponent;

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import ReactList from 'react-list';
import ListItem from './ListItem';

class Viewport extends React.Component {
  componentDidMount() {
    this.viewport = null;

    try {
      document.createEvent('TouchEvent');
    } catch (error) {
      return;
    }

    this.viewport = ReactDOM.findDOMNode(this);

    let scrollStartPos = 0;
    this.touchStartHandler = function (event) {
      scrollStartPos = this.scrollTop + event.touches[0].pageY;
    };
    this.touchMoveHandler = function (event) {
      this.scrollTop = scrollStartPos - event.touches[0].pageY;
      event.preventDefault();
    };

    this.viewport.addEventListener('touchstart', this.touchStartHandler, false);
    this.viewport.addEventListener('touchmove', this.touchMoveHandler, false);
  }

  componentWillUnmount() {
    if (this.viewport) {
      this.viewport.removeEventListener('touchstart', this.touchStartHandler);
      this.viewport.removeEventListener('touchmove', this.touchMoveHandler);
    }
  }

  render() {
    return (
      <div className='scroll-box__viewport'>
        <ReactList
          length={this.props.length}
          itemRenderer={this.props.itemRenderer}
          itemsRenderer={this.props.itemsRenderer}
          type='uniform'
          useTranslate3d={true}
          scrollParentGetter={() => ReactDOM.findDOMNode(this)}
        />
      </div>
    );
  }
}

Viewport.propTypes = {
  length: PropTypes.number.isRequired,
  itemRenderer: PropTypes.func.isRequired,
  itemsRenderer: PropTypes.func.isRequired,
};

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
        <GenericScrollBox>
          <Viewport
            length={this.props.list.length}
            itemRenderer={this.renderItem}
            itemsRenderer={this.renderTable}
          />
        </GenericScrollBox>
      </div>
    );
  }
}

ListComponent.propTypes = {
  list: PropTypes.array.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListComponent;

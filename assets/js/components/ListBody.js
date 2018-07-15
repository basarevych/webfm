import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedList from './VirtualizedList';
import ListItem from '../containers/ListItem';

class ListBody extends React.Component {
  static propTypes = {
    which: PropTypes.string.isRequired,
    breakpoint: PropTypes.string.isRequired,
    isForbidden: PropTypes.bool.isRequired,
    listSize: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.getRow = this.getRow.bind(this);
  }

  getRow(index, key, style, ref) {
    return (
      <div key={key} ref={ref} style={style} className="ReactVirtualized__List__row">
        <ListItem which={this.props.which} index={index} />
      </div>
    );
  }

  render() {
    let bodyClass;
    let listing;
    if (this.props.isForbidden) {
      bodyClass = 'body disabled';
      listing = __('forbidden_message');
    } else if (!this.props.listSize) {
      bodyClass = 'body disabled';
      listing = __('empty_message');
    } else {
      bodyClass = 'body list-body';
      listing = <VirtualizedList breakpoint={this.props.breakpoint} size={this.props.listSize} getRow={this.getRow} />;
    }

    return (
      <div className={bodyClass}>
        {listing}
      </div>
    );
  }
}

export default ListBody;

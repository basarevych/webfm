'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactList from 'react-list';
import ListItem from './ListItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShareDropdownOpen: false };

    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleContentsMode = this.toggleContentsMode.bind(this);
    this.toggleInfoMode = this.toggleInfoMode.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  toggleShareDropdown() {
    this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
  }

  toggleContentsMode() {
    this.props.onSetOtherMode(this.props.otherMode === 'CONTENTS' ? 'LIST' : 'CONTENTS');
  }

  toggleInfoMode() {
    this.props.onSetOtherMode(this.props.otherMode === 'INFO' ? 'LIST' : 'INFO');
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
    let selectedShare = <span>{this.props.share}</span>;

    let shares = [];
    for (let share of this.props.shares) {
      shares.push(
        <DropdownItem
          key={share.name}
          onClick={() => this.props.onSetShare(share.name)}
        >
          {share.name + ' ' + (share.isReadOnly ? __('read_only_label') : __('read_write_label'))}
        </DropdownItem>
      );
    }
    shares = (
      <DropdownMenu>
        {shares}
      </DropdownMenu>
    );

    let path = null;
    if (this.props.viewport !== 'xs' && !(this.props.viewport === 'sm' && this.props.isOtherVisible))
      path = this.props.path;

    let modes = null;
    if (this.props.isOtherVisible) {
      modes = (
        <span>
          <ButtonGroup>
            <Button
              size="sm"
              disabled={this.props.isDisabled}
              color={this.props.otherMode === 'CONTENTS' ? 'primary' : 'secondary'}
              onClick={this.toggleContentsMode}
            >
              <i className="fa fa-fw fa-file-text-o" />
            </Button>
            <Button
              size="sm"
              disabled={this.props.isDisabled}
              color={this.props.otherMode === 'INFO' ? 'primary' : 'secondary'}
              onClick={this.toggleInfoMode}
            >
              <i className="fa fa-fw fa-align-left" />
            </Button>
          </ButtonGroup>
          &nbsp;
        </span>
      );
    }

    let bodyClass, listing;
    if (this.props.isForbidden) {
      bodyClass = 'body disabled';
      listing = __('forbidden_message');
    } else if (!this.props.list.length) {
      bodyClass = 'body disabled';
      listing = __('empty_message');
    } else {
      bodyClass = 'body';
      listing = (
        <div className="scroll-wrapper">
          <div className="scroll-box">
            <ReactList
              itemRenderer={this.renderItem}
              itemsRenderer={this.renderTable}
              length={this.props.list.length}
              type='uniform'
            />
          </div>
        </div>
      );
    }

    return (
      <div className={'view rounded' + (this.props.isActive ? ' active' : '')} onClick={this.props.onPaneClick}>
        <div className={'header' + (this.props.isActive ? ' active' : '')}>
          <div className="share">
            <Dropdown
              color="secondary"
              size="sm"
              isOpen={this.state.isShareDropdownOpen}
              toggle={this.toggleShareDropdown}
            >
              <DropdownToggle caret>
                <div className="fit-width">
                  {selectedShare}
                </div>
              </DropdownToggle>
              {shares}
            </Dropdown>
          </div>
          <div className="path">
            {path}
          </div>
          <div className="tools">
            {modes}
            <Button size="sm" color="secondary" onClick={this.props.onToggleOther}>
              <i className={'fa fa-toggle-' + (this.props.isOtherVisible ? 'on' : 'off')} />
            </Button>
          </div>
        </div>
        <div className={bodyClass}>
          {listing}
        </div>
      </div>
    );
  }
}

ListView.propTypes = {
  viewport: PropTypes.string.isRequired,
  shares: PropTypes.array.isRequired,
  share: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  isForbidden: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  otherMode: PropTypes.string.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
};

export default ListView;

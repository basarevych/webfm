'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ScrollWrapper from './ScrollWrapper';
import ListItem from './ListItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShareDropdownOpen: false };

    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleContentsMode = this.toggleContentsMode.bind(this);
    this.toggleInfoMode = this.toggleInfoMode.bind(this);
  }

  toggleShareDropdown() {
    if (!this.props.isDisabled)
      this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
  }

  toggleContentsMode() {
    if (!this.props.isDisabled)
      this.props.onSetOtherMode(this.props.otherMode === 'CONTENTS' ? 'LIST' : 'CONTENTS');
  }

  toggleInfoMode() {
    if (!this.props.isDisabled)
      this.props.onSetOtherMode(this.props.otherMode === 'INFO' ? 'LIST' : 'INFO');
  }

  componentDidMount() {
    setTimeout(
      () => window.dispatchEvent(new Event('resize')),
      0
    );
  }

  componentWillUnmount() {
    setTimeout(
      () => window.dispatchEvent(new Event('resize')),
      0
    );
  }

  render() {
    let selectedShare = <em>{__('share_label')}</em>;
    let shares = null;
    if (!this.props.isDisabled) {
      if (this.props.share)
        selectedShare = <span>{this.props.share}</span>;

      if (this.props.shares.length) {
        let listing = [];
        for (let share of this.props.shares) {
          listing.push(
            <DropdownItem
              key={share.name}
              onClick={() => this.props.onSetShare(share.name)}
            >
              {share.name + (share.isReadOnly ? ' [r]' : ' [w]')}
            </DropdownItem>
          );
        }
        shares = (
          <DropdownMenu>
            {listing}
          </DropdownMenu>
        );
      }
    }

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

    let listing = __('empty_message');
    if (this.props.list.length) {
      let items = [];
      for (let item of this.props.list) {
        items.push(
          <ListItem
            key={item.id}
            isDisabled={this.props.isDisabled}
            node={item}
            onChangeDirectory={this.props.onChangeDirectory}
          />
        );
      }
      listing = (
        <ScrollWrapper>
          <div className="listing">
            {items}
          </div>
        </ScrollWrapper>
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
        <div className={'body' + (this.props.list.length ? '' : ' disabled')}>
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
  isDisabled: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  otherMode: PropTypes.string.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
  onChangeDirectory: PropTypes.func.isRequired,
};

export default ListView;

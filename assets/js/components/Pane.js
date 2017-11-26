'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ScrollArea from 'xico2k-react-scroll-area';

class Pane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShareDropdownOpen: false };

    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
  }

  toggleShareDropdown() {
    if (!this.props.isDisabled)
      this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
  }

  render() {
    let path = null;
    if (this.props.viewport !== 'xs' && !(this.props.viewport === 'sm' && this.props.isOtherVisible))
      path = this.props.path;

    let selectedShare = <em>{__('share_label')}</em>;
    let shares = null;
    if (!this.props.isDisabled) {
      if (this.props.share)
        selectedShare = <span>{this.props.share}</span>;
      shares = [];
      for (let share of this.props.shares) {
        shares.push(
          <DropdownItem
            key={share.name}
            onClick={() => this.props.onSetShare(share.name)}
          >
            {share.name + (share.isReadOnly ? ' [r]' : ' [w]')}
          </DropdownItem>
        );
      }
      if (shares.length) {
        shares = (
          <DropdownMenu>
            {shares}
          </DropdownMenu>
        );
      } else {
        shares = null;
      }
    }

    let list = (
      <div>
        {__('not_authorized_message')}
      </div>
    );
    if (!this.props.isDisabled) {
      list = [];
      for (let item of this.props.list) {
        list.push(
          <div key={item.id}>{item.name}</div>
        );
      }
      if (list.length) {
        list = (
          <ScrollArea className="scroll-area">
            {list}
          </ScrollArea>
        );
      } else {
        list = null;
      }
    }

    return (
      <div className="pane-wrapper">
        <div className={'pane rounded' + (this.props.isActive ? ' active' : '')} onClick={this.props.onPaneClick}>
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
              <ButtonGroup>
                <Button
                  size="sm"
                  color={this.props.mode === 'LIST' ? 'primary' : 'secondary'}
                  onClick={() => this.props.onSetMode('LIST')}
                >
                  <i className="fa fa-folder-open" />
                </Button>
                <Button
                  size="sm"
                  color={this.props.mode === 'VIEW' ? 'primary' : 'secondary'}
                  onClick={() => this.props.onSetMode('VIEW')}
                >
                  <i className="fa fa-file-text-o" />
                </Button>
                <Button
                  size="sm"
                  color={this.props.mode === 'INFO' ? 'primary' : 'secondary'}
                  onClick={() => this.props.onSetMode('INFO')}
                >
                  <i className="fa fa-align-left" />
                </Button>
              </ButtonGroup>
              &nbsp;
              <Button size="sm" color="secondary" onClick={this.props.onToggleOther}>
                <i className={'fa fa-toggle-' + (this.props.isOtherVisible ? 'on' : 'off')} />
              </Button>
            </div>
          </div>
          <div className={'body' + (this.props.isDisabled ? ' disabled' : '')}>
            {list}
          </div>
        </div>
      </div>
    );
  }
}

Pane.propTypes = {
  viewport: PropTypes.string.isRequired,
  which: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  shares: PropTypes.array.isRequired,
  share: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onSetMode: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func,
};

export default Pane;

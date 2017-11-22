'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
                  <em>{__('share_label')}</em>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="path">
              /
            </div>
            <div className="tools">
              <Button size="sm" color="secondary" onClick={this.props.onToggleOther}>
                <i className={'fa fa-toggle-' + (this.props.isOtherVisible ? 'on' : 'off')} />
              </Button>
            </div>
          </div>
          <div className="body disabled">
            <div>
              {__('not_authorized_message')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Pane.propTypes = {
  which: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func,
};

export default Pane;

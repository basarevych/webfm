'use strict';

import React from 'react';
import PropTypes from 'prop-types';
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
    let share, path, content;
    if (this.props.isDisabled) {
      share = (
        <em>{__('share_label')}</em>
      );
      path = '/';
      content = (
        <div className="body disabled">
          <div>
            {__('not_logged_in_message')}
          </div>
        </div>
      );
    }

    return (
      <div className={'pane rounded' + (this.props.isActive ? ' active' : '')} onClick={this.props.onPaneClick}>
        <div className={'header' + (this.props.isActive ? ' active' : '')}>
          <div className="share">
            <Dropdown
              color="secondary"
              isOpen={this.state.isShareDropdownOpen}
              toggle={this.toggleShareDropdown}
            >
              <DropdownToggle caret>
                {share}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="path">
            {path}
          </div>
        </div>
        {content}
      </div>
    );
  }
}
Pane.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
};

export default Pane;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
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
    let path = null;
    if (this.props.viewport !== 'xs' && !(this.props.viewport === 'sm' && this.props.isOtherVisible))
      path = '/some/path';

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
                    <em>{__('share_label')}</em>
                  </div>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
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
  viewport: PropTypes.string.isRequired,
  which: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool,
  isDisabled: PropTypes.bool.isRequired,
  onPaneClick: PropTypes.func.isRequired,
  onSetMode: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func,
};

export default Pane;

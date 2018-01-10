'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  FaToggleOn, FaToggleOff, FaSortAlphaAsc, FaSortAlphaDesc, FaSortAmountAsc, FaSortAmountDesc,
  FaFileTextO, FaAlignLeft, FaFolderOpenO, FaBars
} from 'react-icons/lib/fa';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { isShareDropdownOpen: false, isMenuOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleNameSort = this.toggleNameSort.bind(this);
    this.toggleSizeSort = this.toggleSizeSort.bind(this);
    this.setListMode = this.setListMode.bind(this);
    this.setContentsMode = this.setContentsMode.bind(this);
    this.setInfoMode = this.setInfoMode.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  toggleShareDropdown() {
    this.setState({ isShareDropdownOpen: !this.state.isShareDropdownOpen });
  }

  toggleNameSort() {
    let newDir;
    if (this.props.sortField === 'NAME')
      newDir = (this.props.sortDir === 'ASC' ? 'DESC' : 'ASC');
    else
      newDir = 'ASC';

    this.props.onSetSort('NAME', newDir);
  }

  toggleSizeSort() {
    let newDir;
    if (this.props.sortField === 'SIZE')
      newDir = (this.props.sortDir === 'ASC' ? 'DESC' : 'ASC');
    else
      newDir = 'ASC';

    this.props.onSetSort('SIZE', newDir);
  }

  setListMode() {
    this.props.onSetOtherMode('LIST');
  }

  setContentsMode() {
    this.props.onSetOtherMode('CONTENTS');
  }

  setInfoMode() {
    this.props.onSetOtherMode('INFO');
  }

  render() {
    let share = null;
    if (this.props.mode === 'LIST') {
      let selectedShare = null;
      if (this.props.directory)
        selectedShare = <span>{this.props.share}</span>;
      else
        selectedShare = __('select_share_label');

      let shares = null;
      if (this.props.shares.length) {
        shares = [];
        for (let share of this.props.shares) {
          shares.push(
            <DropdownItem key={share.name} onClick={() => this.props.onSetShare(share.name)}>
              {share.name + ' ' + (share.isReadOnly ? __('read_only_label') : __('read_write_label'))}
            </DropdownItem>
          );
        }
        shares = (
          <DropdownMenu>
            {shares}
          </DropdownMenu>
        );
      }

      share = (
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
      );
    }

    let path = null;
    if (this.props.mode === 'LIST') {
      if (this.props.directory && this.props.breakpoint !== 'xs' &&
         !(this.props.breakpoint === 'sm' && this.props.isOtherVisible))
        path = this.props.directory;
    } else {
      path = this.props.otherPath;
    }

    let sorting = null;
    if (this.props.mode === 'LIST' && this.props.directory) {
      sorting = (
        <span>
          <ButtonGroup>
            <Button
              size="sm"
              color={this.props.sortField === 'NAME' ? 'primary' : 'secondary'}
              onClick={this.toggleNameSort}
            >
              {this.props.sortField === 'NAME'
                ? (this.props.sortDir === 'ASC' ? <FaSortAlphaAsc /> : <FaSortAlphaDesc />)
                : <FaSortAlphaAsc />}
            </Button>
            <Button
              size="sm"
              color={this.props.sortField === 'SIZE' ? 'primary' : 'secondary'}
              onClick={this.toggleSizeSort}
            >
              {this.props.sortField === 'SIZE'
                ? (this.props.sortDir === 'ASC' ? <FaSortAmountAsc /> : <FaSortAmountDesc />)
                : <FaSortAmountAsc />}
            </Button>
          </ButtonGroup>
          &nbsp;
        </span>
      );
    }

    let modes = null;
    if (this.props.mode === 'LIST' && this.props.directory && this.props.isOtherVisible) {
      modes = (
        <span>
          <ButtonGroup>
            <Button
              size="sm"
              color={this.props.otherMode === 'LIST' ? 'primary' : 'secondary'}
              onClick={this.setListMode}
            >
              <FaFolderOpenO />
            </Button>
            <Button
              size="sm"
              color={this.props.otherMode === 'CONTENTS' ? 'primary' : 'secondary'}
              onClick={this.setContentsMode}
            >
              <FaFileTextO />
            </Button>
            <Button
              size="sm"
              color={this.props.otherMode === 'INFO' ? 'primary' : 'secondary'}
              onClick={this.setInfoMode}
            >
              <FaAlignLeft />
            </Button>
          </ButtonGroup>
          &nbsp;
        </span>
      );
    }

    let tools = (
      <span>
        {sorting}
        {modes}
        <Button size="sm" color="secondary" onClick={this.props.onToggleOther}>
          {this.props.isOtherVisible ? <FaToggleOn /> : <FaToggleOff />}
        </Button>
      </span>
    );
    if (this.props.mode === 'LIST' && (this.props.breakpoint === 'xs' || (this.props.breakpoint === 'sm' && this.props.isOtherVisible))) {
      tools = (
        <div>
          <Button size="sm" color="secondary" onClick={this.toggleMenu}>
            <FaBars />
          </Button>
          <div className={'submenu rounded ' + (this.state.isMenuOpen ? 'd-block' : 'd-none')}>
            {tools}
          </div>
        </div>
      );
    }

    return (
      <div className="header">
        <div className="share">
          {share}
        </div>
        <div className="path">
          {path}
        </div>
        <div className="tools">
          {tools}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  shares: PropTypes.array.isRequired,
  share: PropTypes.string.isRequired,
  directory: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  otherPath: PropTypes.string.isRequired,
  otherMode: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func.isRequired,
};

export default Header;

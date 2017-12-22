'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  FaToggleOn, FaToggleOff, FaSortAlphaAsc, FaSortAlphaDesc, FaSortAmountAsc, FaSortAmountDesc,
  FaFileTextO, FaAlignLeft, FaFolderOpenO
} from 'react-icons/lib/fa';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShareDropdownOpen: false };

    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleNameSort = this.toggleNameSort.bind(this);
    this.toggleSizeSort = this.toggleSizeSort.bind(this);
    this.setListMode = this.setListMode.bind(this);
    this.setContentsMode = this.setContentsMode.bind(this);
    this.setInfoMode = this.setInfoMode.bind(this);
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
    if (this.props.breakpoint !== 'xs' && !(this.props.breakpoint === 'sm' && this.props.isOtherVisible))
      path = this.props.path;

    let sorting = null;
    if (this.props.mode === 'LIST') {
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
    if (this.props.isOtherVisible) {
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

    return (
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
          {sorting}
          {modes}
          <Button size="sm" color="secondary" onClick={this.props.onToggleOther}>
            {this.props.isOtherVisible ? <FaToggleOn /> : <FaToggleOff />}
          </Button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  shares: PropTypes.array.isRequired,
  share: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  otherMode: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOtherVisible: PropTypes.bool.isRequired,
  onSetShare: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  onSetOtherMode: PropTypes.func.isRequired,
  onToggleOther: PropTypes.func.isRequired,
};

export default Header;

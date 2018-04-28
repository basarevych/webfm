'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import {
  FaToggleOn, FaToggleOff, FaSortAlphaAsc, FaSortAlphaDesc, FaSortAmountAsc, FaSortAmountDesc,
  FaFileTextO, FaAlignLeft, FaFolderOpenO, FaBars
} from 'react-icons/lib/fa';
import { Button, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import HintedButton from './HintedButton';

class Header extends React.Component {
  static propTypes = {
    which: PropTypes.string.isRequired,
    breakpoint: PropTypes.string.isRequired,
    shares: PropTypes.instanceOf(List).isRequired,
    share: PropTypes.string.isRequired,
    directory: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    otherPath: PropTypes.string.isRequired,
    sortField: PropTypes.string.isRequired,
    sortDir: PropTypes.string.isRequired,
    isOtherVisible: PropTypes.bool.isRequired,
    onSetShare: PropTypes.func.isRequired,
    onSetSort: PropTypes.func.isRequired,
    onSetMode: PropTypes.func.isRequired,
    onToggleOther: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isShareDropdownOpen: false,
      isMenuOpen: false,
      isSortNameTooltipOpen: false,
      isSortSizeTooltipOpen: false,
      isModeListTooltipOpen: false,
      isModeContentsTooltipOpen: false,
      isModeInfoTooltipOpen: false,
      isPaneTooltipOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleShareDropdown = this.toggleShareDropdown.bind(this);
    this.toggleSortNameTooltip = this.toggleSortNameTooltip.bind(this);
    this.toggleSortSizeTooltip = this.toggleSortSizeTooltip.bind(this);
    this.toggleModeListTooltip = this.toggleModeListTooltip.bind(this);
    this.toggleModeContentsTooltip = this.toggleModeContentsTooltip.bind(this);
    this.toggleModeInfoTooltip = this.toggleModeInfoTooltip.bind(this);
    this.togglePaneTooltip = this.togglePaneTooltip.bind(this);
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

  toggleSortNameTooltip() {
    this.setState({ isSortNameTooltipOpen: !this.state.isSortNameTooltipOpen });
  }

  toggleSortSizeTooltip() {
    this.setState({ isSortSizeTooltipOpen: !this.state.isSortSizeTooltipOpen });
  }

  toggleModeListTooltip() {
    this.setState({ isModeListTooltipOpen: !this.state.isModeListTooltipOpen });
  }

  toggleModeContentsTooltip() {
    this.setState({ isModeContentsTooltipOpen: !this.state.isModeContentsTooltipOpen });
  }

  toggleModeInfoTooltip() {
    this.setState({ isModeInfoTooltipOpen: !this.state.isModeInfoTooltipOpen });
  }

  togglePaneTooltip() {
    this.setState({ isPaneTooltipOpen: !this.state.isPaneTooltipOpen });
  }

  toggleNameSort() {
    this.props.onSetSort('NAME', this.props.sortField === 'NAME' ? (this.props.sortDir === 'ASC' ? 'DESC' : 'ASC') : 'ASC');
  }

  toggleSizeSort() {
    this.props.onSetSort('SIZE', this.props.sortField === 'SIZE' ? (this.props.sortDir === 'ASC' ? 'DESC' : 'ASC') : 'ASC');
  }

  setListMode() {
    this.props.onSetMode('LIST');
  }

  setContentsMode() {
    this.props.onSetMode('CONTENTS');
  }

  setInfoMode() {
    this.props.onSetMode('INFO');
  }

  render() {
    let smallDevice = (this.props.breakpoint === 'xs' || (this.props.breakpoint === 'sm' && this.props.isOtherVisible));

    let share = null;
    if (this.props.mode === 'LIST') {
      let selectedShare = null;
      if (this.props.directory)
        selectedShare = <span>{this.props.share}</span>;
      else
        selectedShare = __('select_share_label');

      let shares = null;
      if (this.props.shares.size) {
        shares = [];
        for (let share of this.props.shares) {
          let name = share.get('name');
          shares.push(
            <DropdownItem key={name} onClick={() => this.props.onSetShare(name)}>
              {name + ' ' + (share.get('isReadOnly') ? __('read_only_label') : __('read_write_label'))}
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
      if (this.props.directory && smallDevice)
        path = this.props.directory;
    } else {
      path = this.props.otherPath;
    }

    let sorting = null;
    if (this.props.mode === 'LIST' && this.props.directory) {
      sorting = (
        <span>
          <ButtonGroup>
            <HintedButton
              id={this.props.which + '-sort-by-name'}
              size="sm"
              color={this.props.sortField === 'NAME' ? 'primary' : 'secondary'}
              onClick={this.toggleNameSort}
              tooltipPlacement="bottom"
              tooltipIsOpen={this.state.isSortNameTooltipOpen}
              tooltipToggle={this.toggleSortNameTooltip}
              tooltipHTML={__('sort_name_hint')}
            >
              {this.props.sortField === 'NAME'
                ? (this.props.sortDir === 'ASC' ? <FaSortAlphaAsc /> : <FaSortAlphaDesc />)
                : <FaSortAlphaAsc />}
            </HintedButton>
            <HintedButton
              id={this.props.which + '-sort-by-size'}
              size="sm"
              color={this.props.sortField === 'SIZE' ? 'primary' : 'secondary'}
              onClick={this.toggleSizeSort}
              tooltipPlacement="bottom"
              tooltipIsOpen={this.state.isSortSizeTooltipOpen}
              tooltipToggle={this.toggleSortSizeTooltip}
              tooltipHTML={__('sort_size_hint')}
            >
              {this.props.sortField === 'SIZE'
                ? (this.props.sortDir === 'ASC' ? <FaSortAmountAsc /> : <FaSortAmountDesc />)
                : <FaSortAmountAsc />}
            </HintedButton>
          </ButtonGroup>
          &nbsp;
        </span>
      );
    }

    let modes = (
      <span>
        <ButtonGroup>
          <HintedButton
            id={this.props.which + '-list-mode'}
            size="sm"
            color={this.props.mode === 'LIST' ? 'primary' : 'secondary'}
            onClick={this.setListMode}
            tooltipPlacement="bottom"
            tooltipIsOpen={this.state.isModeListTooltipOpen}
            tooltipToggle={this.toggleModeListTooltip}
            tooltipHTML={__('mode_list_hint')}
          >
            <FaFolderOpenO />
          </HintedButton>
          <HintedButton
            id={this.props.which + '-contents-mode'}
            size="sm"
            color={this.props.mode === 'CONTENTS' ? 'primary' : 'secondary'}
            onClick={this.setContentsMode}
            tooltipPlacement="bottom"
            tooltipIsOpen={this.state.isModeContentsTooltipOpen}
            tooltipToggle={this.toggleModeContentsTooltip}
            tooltipHTML={__('mode_contents_hint')}
          >
            <FaFileTextO />
          </HintedButton>
          <HintedButton
            id={this.props.which + '-info-mode'}
            size="sm"
            color={this.props.mode === 'INFO' ? 'primary' : 'secondary'}
            onClick={this.setInfoMode}
            tooltipPlacement="bottom"
            tooltipIsOpen={this.state.isModeInfoTooltipOpen}
            tooltipToggle={this.toggleModeInfoTooltip}
            tooltipHTML={__('mode_info_hint')}
          >
            <FaAlignLeft />
          </HintedButton>
        </ButtonGroup>
        &nbsp;
      </span>
    );

    let tools = (
      <span>
        {sorting}
        {modes}
        <HintedButton
          id={this.props.which + '-toggle'}
          size="sm"
          color="secondary"
          onClick={this.props.onToggleOther}
          tooltipPlacement="bottom"
          tooltipIsOpen={this.state.isPaneTooltipOpen}
          tooltipToggle={this.togglePaneTooltip}
          tooltipHTML={__('toggle_pane_hint')}
        >
          {this.props.isOtherVisible ? <FaToggleOn /> : <FaToggleOff />}
        </HintedButton>
      </span>
    );
    if (smallDevice) {
      tools = (
        <div>
          <Button size="sm" color="secondary" onClick={this.toggleMenu}><FaBars /></Button>
          {this.state.isMenuOpen && <div className="submenu rounded">{tools}</div>}
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

export default Header;

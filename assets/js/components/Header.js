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
import { Tooltip } from 'reactstrap';

class Header extends React.PureComponent {
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
              {name + ' ' + (share.isReadOnly ? __('read_only_label') : __('read_write_label'))}
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
              id={this.props.which + '-btn-sort-name'}
              size="sm"
              color={this.props.sortField === 'NAME' ? 'primary' : 'secondary'}
              onClick={this.toggleNameSort}
            >
              {this.props.sortField === 'NAME'
                ? (this.props.sortDir === 'ASC' ? <FaSortAlphaAsc /> : <FaSortAlphaDesc />)
                : <FaSortAlphaAsc />}
            </Button>
            <Tooltip
              placement="bottom"
              target={this.props.which + '-btn-sort-name'}
              isOpen={this.sortNameTooltip && this.state.isSortNameTooltipOpen}
              toggle={this.toggleSortNameTooltip}
              ref={el => { this.sortNameTooltip = el; }}
              dangerouslySetInnerHTML={{ __html: __('sort_name_hint') }}
            />
            <Button
              id={this.props.which + '-btn-sort-size'}
              size="sm"
              color={this.props.sortField === 'SIZE' ? 'primary' : 'secondary'}
              onClick={this.toggleSizeSort}
            >
              {this.props.sortField === 'SIZE'
                ? (this.props.sortDir === 'ASC' ? <FaSortAmountAsc /> : <FaSortAmountDesc />)
                : <FaSortAmountAsc />}
            </Button>
            <Tooltip
              placement="bottom"
              target={this.props.which + '-btn-sort-size'}
              isOpen={this.sortSizeTooltip && this.state.isSortSizeTooltipOpen}
              toggle={this.toggleSortSizeTooltip}
              ref={el => { this.sortSizeTooltip = el; }}
              dangerouslySetInnerHTML={{ __html: __('sort_size_hint') }}
            />
          </ButtonGroup>
          &nbsp;
        </span>
      );
    }

    let modes = (
      <span>
        <ButtonGroup>
          <Button
            id={this.props.which + '-btn-mode-list'}
            size="sm"
            color={this.props.mode === 'LIST' ? 'primary' : 'secondary'}
            onClick={this.setListMode}
          >
            <FaFolderOpenO />
          </Button>
          <Tooltip
            placement="bottom"
            target={this.props.which + '-btn-mode-list'}
            isOpen={this.modeListTooltip && this.state.isModeListTooltipOpen}
            toggle={this.toggleModeListTooltip}
            ref={el => { this.modeListTooltip = el; }}
            dangerouslySetInnerHTML={{ __html: __('mode_list_hint') }}
          />
          <Button
            id={this.props.which + '-btn-mode-contents'}
            size="sm"
            color={this.props.mode === 'CONTENTS' ? 'primary' : 'secondary'}
            onClick={this.setContentsMode}
          >
            <FaFileTextO />
          </Button>
          <Tooltip
            placement="bottom"
            target={this.props.which + '-btn-mode-contents'}
            isOpen={this.modeContentsTooltip && this.state.isModeContentsTooltipOpen}
            toggle={this.toggleModeContentsTooltip}
            ref={el => { this.modeContentsTooltip = el; }}
            dangerouslySetInnerHTML={{ __html: __('mode_contents_hint') }}
          />
          <Button
            id={this.props.which + '-btn-mode-info'}
            size="sm"
            color={this.props.mode === 'INFO' ? 'primary' : 'secondary'}
            onClick={this.setInfoMode}
          >
            <FaAlignLeft />
          </Button>
          <Tooltip
            placement="bottom"
            target={this.props.which + '-btn-mode-info'}
            isOpen={this.modeInfoTooltip && this.state.isModeInfoTooltipOpen}
            toggle={this.toggleModeInfoTooltip}
            ref={el => { this.modeInfoTooltip = el; }}
            dangerouslySetInnerHTML={{ __html: __('mode_info_hint') }}
          />
        </ButtonGroup>
        &nbsp;
      </span>
    );

    let tools = (
      <span>
        {sorting}
        {modes}
        <Button
          id={this.props.which + '-btn-toggle-pane'}
          size="sm"
          color="secondary"
          onClick={this.props.onToggleOther}
        >
          {this.props.isOtherVisible ? <FaToggleOn /> : <FaToggleOff />}
        </Button>
        <Tooltip
          placement="bottom"
          target={this.props.which + '-btn-toggle-pane'}
          isOpen={this.paneTooltip && this.state.isPaneTooltipOpen}
          toggle={this.togglePaneTooltip}
          ref={el => { this.paneTooltip = el; }}
          dangerouslySetInnerHTML={{ __html: __('toggle_pane_hint') }}
        />
      </span>
    );
    if (this.props.breakpoint === 'xs' || (this.props.breakpoint === 'sm' && this.props.isOtherVisible)) {
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

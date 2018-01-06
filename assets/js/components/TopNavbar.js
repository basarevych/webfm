'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/lib/fa';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isAuthDropdownOpen: false };

    this.handleAuthDropdownToggle = this.handleAuthDropdownToggle.bind(this);
  }

  handleAuthDropdownToggle() {
    this.setState({ isAuthDropdownOpen: !this.state.isAuthDropdownOpen });
  }

  render() {
    let commands = null;
    let signing = null;
    if (this.props.isLoggedIn) {
      commands = (
        <Nav navbar>
          <NavItem>
            <NavLink className="link" onClick={this.props.onMkdirCommand}>{__('mkdir_command')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="link" onClick={this.props.onCopyCommand}>{__('copy_command')}</NavLink>
          </NavItem>
        </Nav>
      );
      signing = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Dropdown
              isOpen={this.state.isAuthDropdownOpen}
              toggle={this.handleAuthDropdownToggle}
            >
              <DropdownToggle caret nav>
                <FaUser className="icon-text" /> {this.props.login}
              </DropdownToggle>
              <DropdownMenu right={this.props.breakpoint !== 'xs'}>
                <DropdownItem onClick={this.props.onSignOut}>{__('sign_out_button')}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      );
    } else {
      signing = (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="link" onClick={this.props.onSignIn}>{__('sign_in_button')}</NavLink>
          </NavItem>
        </Nav>
      );
    }

    return (
      <Navbar dark expand="sm">
        <NavbarToggler onClick={this.props.onToggleNavbar} />
        <NavbarBrand href="/">{__('project_title')}</NavbarBrand>
        <Collapse isOpen={this.props.isOpen} navbar>
          {commands}
          {signing}
        </Collapse>
      </Navbar>
    );
  }
}

TopNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  breakpoint: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.string,
  onToggleNavbar: PropTypes.func.isRequired,
  onMkdirCommand: PropTypes.func.isRequired,
  onCopyCommand: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default TopNavbar;

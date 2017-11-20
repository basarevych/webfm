'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isNavbarOpen: false, isAuthMenuOpen: false };

    this.handleNavbarToggleClick = this.handleNavbarToggleClick.bind(this);
    this.handleAuthMenuToggleClick = this.handleAuthMenuToggleClick.bind(this);
  }

  handleNavbarToggleClick() {
    this.setState({ isNavbarOpen: !this.state.isNavbarOpen });
  }

  handleAuthMenuToggleClick() {
    this.setState({ isAuthMenuOpen: !this.state.isAuthMenuOpen });
  }

  render() {
    let signing;
    if (this.props.isLoggedIn) {
      signing = (
        <Dropdown
          isOpen={this.state.isAuthMenuOpen}
          toggle={this.handleAuthMenuToggleClick}
        >
          <DropdownToggle caret nav>
            <i className="fa fa-user fa-mr" /> {this.props.login}
          </DropdownToggle>
          <DropdownMenu right={this.props.viewport !== 'xs'}>
            <DropdownItem onClick={this.props.onSignOutClick}>{__('sign_out_button')}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    } else {
      signing = (
        <NavLink onClick={this.props.onSignInClick}>{__('sign_in_button')}</NavLink>
      );
    }

    return (
      <Navbar dark expand="sm">
        <NavbarToggler onClick={this.handleNavbarToggleClick} />
        <NavbarBrand href="/">{__('project_title')}</NavbarBrand>
        <Collapse isOpen={this.state.isNavbarOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>{__('copy_command')}</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {signing}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

TopNavbar.propTypes = {
  viewport: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.string,
  onSignInClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default TopNavbar;

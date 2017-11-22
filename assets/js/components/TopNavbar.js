'use strict';

import React from 'react';
import PropTypes from 'prop-types';
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
    let signing;
    if (this.props.isLoggedIn) {
      signing = (
        <Dropdown
          isOpen={this.state.isAuthDropdownOpen}
          toggle={this.handleAuthDropdownToggle}
        >
          <DropdownToggle caret nav>
            <i className="fa fa-user fa-mr" /> {this.props.login}
          </DropdownToggle>
          <DropdownMenu right={this.props.viewport !== 'xs'}>
            <DropdownItem onClick={this.props.onSignOut}>{__('sign_out_button')}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    } else {
      signing = (
        <NavLink onClick={this.props.onSignIn}>{__('sign_in_button')}</NavLink>
      );
    }

    return (
      <Navbar dark expand="sm">
        <NavbarToggler onClick={this.props.onToggleNavbar} />
        <NavbarBrand href="/">{__('project_title')}</NavbarBrand>
        <Collapse isOpen={this.props.isOpen} navbar>
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
  isOpen: PropTypes.bool.isRequired,
  viewport: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.string,
  onToggleNavbar: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default TopNavbar;

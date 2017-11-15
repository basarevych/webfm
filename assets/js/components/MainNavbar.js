'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { authDropdownOpen: false };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleAuthDropdownToggle = this.handleAuthDropdownToggle.bind(this);
  }

  handleToggle() {
    if (!this.props.isLocked)
      this.props.onToggleClick();
  }

  handleAuthDropdownToggle() {
    this.setState({
      authDropdownOpen: !this.state.authDropdownOpen
    });
  }

  render() {
    let signing;
    if (this.props.isLoggedIn) {
      signing = (
        <Dropdown
          isOpen={this.state.authDropdownOpen}
          toggle={this.handleAuthDropdownToggle}
        >
          <DropdownToggle caret nav>
            <i className="fa fa-user fa-mr" /> {this.props.login}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.props.onSignOutClick}>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    } else {
      signing = (
        <NavLink onClick={this.props.onSignInClick}>Sign in</NavLink>
      );
    }

    return (
      <Navbar dark expand="md">
        <NavbarToggler onClick={this.handleToggle} />
        <NavbarBrand href="/">WebFM</NavbarBrand>
        <Collapse isOpen={this.props.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>Copy</NavLink>
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

MainNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.string,
  onToggleClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default MainNavbar;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const MainNavbar = (
  {
    isOpen,
    onToggleClick,
    onSignInClick,
  }
) => (
  <Navbar color="faded" light expand="md">
    <NavbarToggler onClick={onToggleClick} />
    <NavbarBrand href="/">WebFM</NavbarBrand>
    <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink>Copy</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink onClick={onSignInClick}>anonymous</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
);

MainNavbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default MainNavbar;

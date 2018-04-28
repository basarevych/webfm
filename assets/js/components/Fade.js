'use strict';

import style from '../../styles/variables.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={parseInt(style.fadeDuration)}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Fade;

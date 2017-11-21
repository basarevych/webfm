'use strict';

import style from '../../styles/variables.scss';
import React from 'react';
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

export default Fade;

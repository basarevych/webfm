'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';

const mapTypeToClass = type => {
  switch (type) {
    case 'success':
      return 'alert alert-success text-center';
    case 'error':
      return 'alert alert-danger text-center';
    case 'info':
      return 'alert alert-info text-center';
    case 'warning':
      return 'alert alert-warning text-center';
  }
  return 'alert alert-primary text-center';
};

class FormMessages extends React.PureComponent {
  render() {
    let codes = Object.keys(this.props.messages || {});
    return (
      <TransitionGroup>
        {codes.map(code =>
          <Fade key={code}>
            <div
              className={mapTypeToClass(this.props.messages[code].type)}
              role="alert"
              dangerouslySetInnerHTML={{ __html: this.props.messages[code].message }}
            />
          </Fade>
        )}
      </TransitionGroup>
    );
  }
}


FormMessages.propTypes = {
  messages: PropTypes.object,
};

export default FormMessages;

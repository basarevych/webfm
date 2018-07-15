import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
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
  static propTypes = {
    messages: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    messages: Map({}),
  };

  render() {
    return (
      <TransitionGroup>
        {Array.from(this.props.messages.keys()).map(code => // eslint-disable-line lodash/prefer-lodash-method
          <Fade key={code}>
            <div
              className={mapTypeToClass(this.props.messages.getIn([code, 'type']))}
              role="alert"
              dangerouslySetInnerHTML={{ __html: this.props.messages.getIn([code, 'message']) }}
            />
          </Fade>
        )}
      </TransitionGroup>
    );
  }
}

export default FormMessages;

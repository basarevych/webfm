'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { FormFeedback } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';

class FieldErrors extends React.PureComponent {
  static propTypes = {
    errors: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    errors: Map({}),
  };

  render() {
    return (
      <FormFeedback>
        <TransitionGroup>
          {Array.from(this.props.errors.keys()).map(code =>
            <Fade key={code}>
              <div dangerouslySetInnerHTML={{ __html: this.props.errors.getIn([code, 'message']) }} />
            </Fade>
          )}
        </TransitionGroup>
      </FormFeedback>
    );
  }
}

export default FieldErrors;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';

class FieldErrors extends React.PureComponent {
  render() {
    let codes = Object.keys(this.props.errors || {});
    return (
      <FormFeedback>
        <TransitionGroup>
          {codes.map(code =>
            <Fade key={code}>
              <div dangerouslySetInnerHTML={{ __html: this.props.errors[code].message }} />
            </Fade>
          )}
        </TransitionGroup>
      </FormFeedback>
    );
  }
}

FieldErrors.propTypes = {
  errors: PropTypes.object,
};

export default FieldErrors;

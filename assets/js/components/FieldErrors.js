'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import Fade from './Fade';

const FieldErrors = ({ errors }) => {
  if (!errors)
    errors = {};

  let codes = Object.keys(errors);
  return (
    <FormFeedback>
      <TransitionGroup>
        {codes.map(code =>
          <Fade key={code}>
            <div dangerouslySetInnerHTML={{ __html: errors[code].message }} />
          </Fade>
        )}
      </TransitionGroup>
    </FormFeedback>
  );
};

FieldErrors.propTypes = {
  errors: PropTypes.object,
};

export default FieldErrors;

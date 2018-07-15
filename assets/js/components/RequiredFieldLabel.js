import React from 'react';

class InputRequiredLabel extends React.PureComponent {
  render() {
    return (
      <div className="control-required">
        {__('required_field')}
      </div>
    );
  }
}

export default InputRequiredLabel;

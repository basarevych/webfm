import React from 'react';

class DisabledBody extends React.PureComponent {
  render() {
    return (
      <div className="body disabled">
        {__('not_authorized_message')}
      </div>
    );
  }
}

export default DisabledBody;

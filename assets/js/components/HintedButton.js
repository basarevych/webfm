'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import SafeTooltip from './SafeTooltip';

class HintedButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { button: null };
  }

  componentDidMount() {
    this.setState({ button: ReactDOM.findDOMNode(this) });
  }

  componentWillUnmount() {
    this.setState({ button: null });
  }

  render() {
    return (
      <Button
        size={this.props.size}
        color={this.props.color}
        onClick={this.props.onClick}
      >
        {this.props.children}
        {this.state.button && <SafeTooltip
          target={() => this.state.button}
          placement={this.props.tooltipPlacement}
          isOpen={this.props.tooltipIsOpen}
          toggle={this.props.tooltipToggle}
          dangerouslySetInnerHTML={{__html: this.props.tooltipHTML}}
        />}
      </Button>
    );
  }
}

export default HintedButton;

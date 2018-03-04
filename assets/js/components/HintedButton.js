'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import SafeTooltip from './SafeTooltip';
import {Map} from "immutable";
import PropTypes from 'prop-types';

class HintedButton extends React.PureComponent {
  static propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    tooltipPlacement: PropTypes.string.isRequired,
    tooltipIsOpen: PropTypes.bool.isRequired,
    tooltipToggle: PropTypes.func.isRequired,
    tooltipHTML: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { button: null };
    this.timer = null;
  }

  componentDidMount() {
    this.setState({ button: ReactDOM.findDOMNode(this) });
  }

  componentWillReceiveProps() {
    if (this.timer)
      clearTimeout(this.timer);

    this.timer = setTimeout(
      () => {
        this.timer = null;
        if (this.props.tooltipIsOpen)
          this.props.tooltipToggle();
      },
      3000
    );
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

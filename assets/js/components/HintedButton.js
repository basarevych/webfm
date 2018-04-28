'use strict';

import React from 'react';
import { Button } from 'reactstrap';
import SafeTooltip from './SafeTooltip';
import PropTypes from 'prop-types';

class HintedButton extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    tooltipPlacement: PropTypes.string.isRequired,
    tooltipIsOpen: PropTypes.bool.isRequired,
    tooltipToggle: PropTypes.func.isRequired,
    tooltipHTML: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
  };

  constructor(props) {
    super(props);

    this.timer = null;
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

  render() {
    return (
      <Button
        id={this.props.id}
        size={this.props.size}
        color={this.props.color}
        onClick={this.props.onClick}
      >
        {this.props.children}
        <SafeTooltip
          target={this.props.id}
          placement={this.props.tooltipPlacement}
          isOpen={this.props.tooltipIsOpen}
          toggle={this.props.tooltipToggle}
          dangerouslySetInnerHTML={{__html: this.props.tooltipHTML}}
        />
      </Button>
    );
  }
}

export default HintedButton;

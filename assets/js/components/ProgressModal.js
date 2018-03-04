'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';
import { GenericScrollBox } from 'react-scroll-box';
import Viewport from './ScrollViewport';

class ProgressModal extends React.Component {
  static propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isFinished: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onDoneClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { progress: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ progress: this.state.progress >= 100 ? 0 : this.state.progress + 10 }), 500);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.message !== nextProps.message ||
           this.props.isFinished !== nextProps.isFinished ||
           (!this.props.isFinished && this.state.progress !== nextState.progress);
  }

  componentDidUpdate() {
    if (this.viewport)
      this.viewport.scrollDown();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.isStarted} size="lg" backdrop="static" fade centered toggle={() => {}}>
        <ModalHeader>{__('progress_title')}</ModalHeader>
        <ModalBody>
          {(!this.props.isStarted || this.props.isFinished)
            ? <Progress color="primary" barClassName="text-dark" value={100}>{__('done_message')}</Progress>
            : <Progress color="warning" barClassName="text-light" animated value={this.state.progress} />}
          <br />
          <div className="progress-widget">
            <div className="scroll-wrapper">
              <GenericScrollBox permitHandleDragInterruption={false}>
                <Viewport classes="text-content condensed" reactList={false} ref={el => { this.viewport = el; }}>
                  {this.props.message}
                  <br/>
                </Viewport>
              </GenericScrollBox>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color={this.props.isFinished ? 'primary' : 'secondary'}
            disabled={!this.props.isFinished}
            onClick={this.props.onDoneClick}
          >
            {__('done_button')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ProgressModal;

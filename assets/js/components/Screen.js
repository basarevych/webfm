'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { TransitionGroup } from 'react-transition-group';
import { FaCog } from 'react-icons/lib/fa';
import Fade from './Fade';
import Navbar from '../containers/Navbar';
import SignInDialog from '../containers/SignInDialog';
import ProgressDialog from '../containers/ProgressDialog';
import MkdirDialog from '../containers/MkdirDialog';
import RenameDialog from '../containers/RenameDialog';
import CopyDialog from '../containers/CopyDialog';
import MoveDialog from '../containers/MoveDialog';
import DeleteDialog from '../containers/DeleteDialog';
import FailureDialog from '../containers/FailureDialog';
import LeftPane from '../containers/LeftPane';
import RightPane from '../containers/RightPane';

@DragDropContext(HTML5Backend)
class Screen extends React.Component {
  static propTypes = {
    isConnected: PropTypes.bool.isRequired,
    isLeftPaneVisible: PropTypes.bool.isRequired,
    isRightPaneVisible: PropTypes.bool.isRequired,
    onSetDragMode: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(event) {
    this.props.onSetDragMode(event.ctrlKey ? 'MOVE' : 'COPY');
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    let overlay = null;
    if (!this.props.isConnected) {
      overlay = (
        <div className="page-overlay shaded">
          <div className="no-connection-window rounded">
            <FaCog className="rotating icon-text"/>
            &nbsp;
            {__('not_connected_message')}
          </div>
        </div>
      );
    }

    return (
      <div className="w-100 h-100" onDrag={this.handleDrag}>
        {overlay}
        <div className="w-100 h-100 d-flex flex-column">
          <div>
            <Navbar/>
            <SignInDialog/>
            <ProgressDialog/>
            <MkdirDialog/>
            <RenameDialog/>
            <CopyDialog/>
            <MoveDialog/>
            <DeleteDialog/>
            <FailureDialog/>
          </div>
          <TransitionGroup className="pane-container">
            {this.props.isLeftPaneVisible ? <Fade><LeftPane/></Fade> : null}
            {this.props.isRightPaneVisible ? <Fade><RightPane/></Fade> : null}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default Screen;

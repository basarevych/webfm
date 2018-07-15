import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import MultiBackend, { Preview } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
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
import Pane from '../containers/Pane';

@DragDropContext(MultiBackend(HTML5toTouch))
class App extends React.Component {
  static propTypes = {
    isConnected: PropTypes.bool.isRequired,
    isLeftPaneVisible: PropTypes.bool.isRequired,
    isRightPaneVisible: PropTypes.bool.isRequired,
    numSelectedLeft: PropTypes.number.isRequired,
    numSelectedRight: PropTypes.number.isRequired,
    onSetDragMode: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.handleDrag = this.handleDrag.bind(this);
    this.generatePreview = this.generatePreview.bind(this);
  }

  handleDrag(event) {
    this.props.onSetDragMode(event.ctrlKey ? 'MOVE' : 'COPY');
  }

  generatePreview(type, item, style) {
    let numSelected = 1;
    if (item.isSelected)
      numSelected = (item.pane === 'LEFT' ? this.props.numSelectedLeft : this.props.numSelectedRight);

    style.className = 'dragged-node';

    return (
      <div style={style}>
        {numSelected === 1
          ? __('dragged_single_message', item.name)
          : __('dragged_multi_message', numSelected)}
      </div>
    );
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
            {this.props.isLeftPaneVisible ? <Fade><Pane which="LEFT" /></Fade> : null}
            {this.props.isRightPaneVisible ? <Fade><Pane which="RIGHT" /></Fade> : null}
          </TransitionGroup>
        </div>
        <Preview generator={this.generatePreview} />
      </div>
    );
  }
}

export default App;

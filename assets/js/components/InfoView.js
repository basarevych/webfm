'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import moment from 'moment-timezone';
import Viewport from './ScrollViewport';
import { human } from '../lib/size';

class InfoView extends React.PureComponent {
  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.info) {
      body = __('info_view_message');
    } else {
      if (this.props.info.isLoading) {
        body = <h1><FaCog className="rotating"/></h1>;
      } else if (this.props.info.isForbidden) {
        body = __('forbidden_message');
      } else {
        body = (
          <div className="scroll-wrapper">
            <GenericScrollBox permitHandleDragInterruption={false}>
              <Viewport reactList={false}>
                <div className="listing">
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_name_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.name}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_parent_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.parent}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_size_bytes_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.size}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_size_human_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{human(this.props.info.size)}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_du_bytes_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.du}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_du_human_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{human(this.props.info.du)}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_mode_number_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.modeNumber.toString(8)}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_mode_string_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.modeString}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_user_id_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.userId}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_user_name_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.userName}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_group_id_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.groupId}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_group_name_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{this.props.info.groupName}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_atime_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{moment(this.props.info.atime).format('YYYY-MM-DD HH:mm:ss')}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item even">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_mtime_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{moment(this.props.info.mtime).format('YYYY-MM-DD HH:mm:ss')}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item odd">
                    <div className="info">
                      <div className="wrapper">
                        <div className="data">
                          {__('info_ctime_label')}
                        </div>
                      </div>
                    </div>
                    <div className="name">
                      <div className="fit-width fixed-margin">
                        <strong>{moment(this.props.info.ctime).format('YYYY-MM-DD HH:mm:ss')}</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </Viewport>
            </GenericScrollBox>
          </div>
        );
        bodyClass = 'body';
      }
    }

    return (
      <div className={bodyClass}>
        {body}
      </div>
    );
  }
}

InfoView.propTypes = {
  info: PropTypes.object,
};

export default InfoView;

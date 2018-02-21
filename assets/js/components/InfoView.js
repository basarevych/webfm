'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import moment from 'moment-timezone';
import Viewport from './ScrollViewport';
import { human } from '../lib/size';

class InfoView extends React.PureComponent {
  static propTypes = {
    info: PropTypes.instanceOf(Map),
  };

  static defaultProps = {
    info: Map({}),
  };

  render() {
    let bodyClass = 'body disabled';
    let body;
    if (!this.props.info.size) {
      body = __('info_view_message');
    } else {
      if (this.props.info.get('isLoading')) {
        body = <h1><FaCog className="rotating"/></h1>;
      } else if (this.props.info.get('isForbidden')) {
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
                        <strong>{this.props.info.get('name')}</strong>
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
                        <strong>{this.props.info.get('parent')}</strong>
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
                        <strong>{this.props.info.get('size')}</strong>
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
                        <strong>{human(this.props.info.get('size'))}</strong>
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
                        <strong>{this.props.info.get('du')}</strong>
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
                        <strong>{human(this.props.info.get('du'))}</strong>
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
                        <strong>{this.props.info.get('modeNumber').toString(8)}</strong>
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
                        <strong>{this.props.info.get('modeString')}</strong>
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
                        <strong>{this.props.info.get('userId')}</strong>
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
                        <strong>{this.props.info.get('userName')}</strong>
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
                        <strong>{this.props.info.get('groupId')}</strong>
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
                        <strong>{this.props.info.get('groupName')}</strong>
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
                        <strong>{moment(this.props.info.get('atime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
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
                        <strong>{moment(this.props.info.get('mtime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
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
                        <strong>{moment(this.props.info.get('ctime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
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

export default InfoView;

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { FaCog } from 'react-icons/lib/fa';
import moment from 'moment-timezone';
import { human } from '../lib/size';

class InfoBody extends React.Component {
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
          <React.Fragment>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_name_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('name')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_parent_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('parent')}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_size_bytes_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('size')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_size_human_label')}
                </div>
              </div>
              <div className="name">
                <strong>{human(this.props.info.get('size'))}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_du_bytes_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('du')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_du_human_label')}
                </div>
              </div>
              <div className="name">
                <strong>{human(this.props.info.get('du'))}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_mode_number_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('modeNumber').toString(8)}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_mode_string_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('modeString')}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_user_id_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('userId')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_user_name_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('userName')}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_group_id_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('groupId')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_group_name_label')}
                </div>
              </div>
              <div className="name">
                <strong>{this.props.info.get('groupName')}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_atime_label')}
                </div>
              </div>
              <div className="name">
                <strong>{moment(this.props.info.get('atime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
              </div>
            </div>
            <div className="listing-row even">
              <div className="info">
                <div className="data">
                  {__('info_mtime_label')}
                </div>
              </div>
              <div className="name">
                <strong>{moment(this.props.info.get('mtime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
              </div>
            </div>
            <div className="listing-row odd">
              <div className="info">
                <div className="data">
                  {__('info_ctime_label')}
                </div>
              </div>
              <div className="name">
                <strong>{moment(this.props.info.get('ctime')).format('YYYY-MM-DD HH:mm:ss')}</strong>
              </div>
            </div>
          </React.Fragment>
        );
        bodyClass = 'body info-body';
      }
    }

    return (
      <div className={bodyClass}>
        {body}
      </div>
    );
  }
}

export default InfoBody;

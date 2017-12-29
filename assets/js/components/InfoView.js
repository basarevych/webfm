'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { GenericScrollBox } from 'react-scroll-box';
import { FaCog } from 'react-icons/lib/fa';
import moment from 'moment-timezone';
import Viewport from './ScrollViewport';
import { human } from '../lib/size';

const InfoView = ({ info }) => {
  let bodyClass = 'body disabled';
  let body;
  if (!info) {
    body = __('info_view_message');
  } else {
    if (info.isLoading) {
      body = <h1><FaCog className="rotating"/></h1>;
    } else if (info.isForbidden) {
      body = __('forbidden_message');
    } else {
      body = (
        <div className="scroll-wrapper">
          <GenericScrollBox permitHandleDragInterruption={false}>
            <Viewport>
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
                      <strong>{info.name}</strong>
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
                      <strong>{info.parent}</strong>
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
                      <strong>{info.size}</strong>
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
                      <strong>{human(info.size)}</strong>
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
                      <strong>{info.du}</strong>
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
                      <strong>{human(info.du)}</strong>
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
                      <strong>{info.modeNumber.toString(8)}</strong>
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
                      <strong>{info.modeString}</strong>
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
                      <strong>{info.userId}</strong>
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
                      <strong>{info.userName}</strong>
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
                      <strong>{info.groupId}</strong>
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
                      <strong>{info.groupName}</strong>
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
                      <strong>{moment(info.atime).format('YYYY-MM-DD HH:mm:ss')}</strong>
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
                      <strong>{moment(info.mtime).format('YYYY-MM-DD HH:mm:ss')}</strong>
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
                      <strong>{moment(info.ctime).format('YYYY-MM-DD HH:mm:ss')}</strong>
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
};

InfoView.propTypes = {
  info: PropTypes.object,
};

export default InfoView;

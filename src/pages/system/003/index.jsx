import { Breadcrumb, Menu } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import React from 'react';
// import { connect } from 'dva';
// import IconFont from '../../../components/IconFont';
// import styles from './index.less';
import Editor from '../../../components/Editor';

export default class Settings extends React.PureComponent {
  render() {
    const SysMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/system/001">
            <FormattedMessage id="menu.system.a1" defaultMessage="a1" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/002">
            <FormattedMessage id="menu.system.a2" defaultMessage="a2" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/003">
            <FormattedMessage id="menu.system.a3" defaultMessage="a3" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/custom">
            <FormattedMessage id="menu.system.custom" defaultMessage="custom" />
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item overlay={SysMenu}>
            <FormattedMessage id="menu.system" defaultMessage="system" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {<FormattedMessage id="menu.system.a3" defaultMessage="a3" />}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Editor />
        </div>
      </div>
    );
  }
}

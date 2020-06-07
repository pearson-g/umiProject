import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Col, List, Avatar, Tabs, Descriptions, Badge, Input, NoContent } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import BzMenu from '../../../components/BzMenu';
import CombinationSearch from '../../../components/CombinationSearch';
import IconFont from '../../../components/IconFont';
import styles from './style.less';
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = (
  <Menu overlay={menu}>
    <Menu.Item>
      <Link to="/dashboard/analysis"><FormattedMessage
        id="menu.dashboard.analysis"
        defaultMessage="analysis"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard/monitor"><FormattedMessage
        id="menu.dashboard.monitor"
        defaultMessage="monitor"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard/map"><FormattedMessage
        id="menu.dashboard.map"
        defaultMessage="map"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard/historicaldata"><FormattedMessage
        id="menu.dashboard.historicaldata"
        defaultMessage="historicaldata"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard/realtimedata"><FormattedMessage
        id="menu.dashboard.realtimedata"
        defaultMessage="realtimedata"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard/trends"><FormattedMessage
        id="menu.dashboard.trends"
        defaultMessage="trends"
      /></Link>
    </Menu.Item>
  </Menu>
);
/* */
export default class xxxx extends React.PureComponent {
  render() {
    return <div>
      <Breadcrumb>
        <Breadcrumb.Item overlay={menu}>
          <FormattedMessage
            id="menu.dashboard"
            defaultMessage="dashboard"
          />
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styles.color_bd}>
          {
            <FormattedMessage
              id="menu.dashboard.monitor"
              defaultMessage="monitor"
            />
          }
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.r_content}>
      </div>
    </div>
  }
}
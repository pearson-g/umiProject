import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Col, List, Avatar, Tabs, Descriptions, Badge, Input, NoContent } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import BzMenu from '../../../components/BzMenu';
import CombinationSearch from '../../../components/CombinationSearch';
import IconFont from '../../../components/IconFont';
import styles from './index.less';
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/asset/equipment"><FormattedMessage
                id="menu.asset.equipment"
                defaultMessage="equipment"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/asset/maintainplan"><FormattedMessage
                id="menu.asset.maintainplan"
                defaultMessage="maintainplan"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/asset/maintaintask"><FormattedMessage
                id="menu.asset.maintaintask"
                defaultMessage="maintaintask"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/asset/accessory"><FormattedMessage
                id="menu.asset.accessory"
                defaultMessage="accessory"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/asset/workorder"><FormattedMessage
                id="menu.asset.workorder"
                defaultMessage="workorder"
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
                        id="menu.asset"
                        defaultMessage="asset"
                    />
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    {
                        <FormattedMessage
                            id="menu.asset.accessory"
                            defaultMessage="accessory"
                        />
                    }
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.r_content}>
            </div>
        </div>
    }
}
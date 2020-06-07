import { Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const menu = (
    <Menu style={{ width: '190px', backgroundColor: '#A3A0FB'}}>
        <Menu.Item>
            <Link to="/dashboard/analysis/town/guicheng" style={{fontSize:'15px'}}><FormattedMessage
                id="menu.dashboard.analysis.town.guicheng"
                defaultMessage="guicheng"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/dali" style={{ fontSize: '15px'}}><FormattedMessage
                id="menu.dashboard.analysis.town.dali"
                defaultMessage="dali"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/lishui" style={{ fontSize: '15px'}}><FormattedMessage
                id="menu.dashboard.analysis.town.lishui"
                defaultMessage="lishui"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/shishan" style={{ fontSize: '15px'}}><FormattedMessage
                id="menu.dashboard.analysis.town.shishan"
                defaultMessage="shishan"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/danzao" style={{ fontSize: '15px'}}><FormattedMessage
                id="menu.dashboard.analysis.town.danzao"
                defaultMessage="danzao"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/xiqiao" style={{ fontSize: '15px' }}><FormattedMessage
                id="menu.dashboard.analysis.town.xiqiao"
                defaultMessage="xiqiao"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/analysis/town/jiujiang" style={{ fontSize: '15px' }}><FormattedMessage
                id="menu.dashboard.analysis.town.jiujiang"
                defaultMessage="jiujiang"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
    </Menu>
);
export default () => {
    return <div>
        <div className={styles.bzmenu}>
            <Dropdown overlay={menu} overlayClassName='bzmenu_con' placement="bottomCenter">
            <a className="ant-dropdown-link">
                    <Icon type="down" style={{ fontSize: '14px' }} />
            </a>
        </Dropdown>
        </div>
        
    </div>
}
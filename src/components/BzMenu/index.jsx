import { Menu, Dropdown, Icon } from 'antd';
import styles from './index.less';
import IconFont from '../../components/IconFont';
const { SubMenu } = Menu;

const menu = (
    <Menu style={{ width: '220px', height: 'calc(100vh - 165px)', backgroundColor:'#A3A0FB' ,color:'white',fontWeight:'bold'}}>
        <SubMenu title="桂城街道">
            <Menu.Item style={{ width: '220px'}}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px',marginRight:'12px'}} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px'}} /></span>平一泵站（新）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平二泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平三泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平四泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平五泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平六泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>东调泵站（增压）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>东调泵站（增压）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>玉器街泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>中途泵站</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>石肯泵站</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu title="大沥镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu title="里水镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu title="狮山镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu title="丹灶镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <SubMenu title="西樵镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider/>
        <SubMenu title="九江镇">
            <Menu.Item style={{ width: '220px' }}><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（旧）</a></Menu.Item>
            <Menu.Item><a><span><IconFont type="icon-dot1" style={{ fontSize: '12px', marginRight: '12px' }} /></span>平一泵站（新）</a></Menu.Item>
        </SubMenu>
        <Menu.Divider />
    </Menu>
);
export default () => {
    return <div className={styles.bzmenu}>
        <Dropdown overlay={menu} overlayClassName='resetOverlay' placement="bottomCenter">
            <a className="ant-dropdown-link">
                <Icon type="down" style={{ fontSize: '14px'}}/>
            </a>
        </Dropdown>
    </div>
}
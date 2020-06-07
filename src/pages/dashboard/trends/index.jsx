import { Layout, Card, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row,Statistic,Col } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import BzMenu from '../../../components/BzMenu';
import { Link } from 'react-router-dom';
import styles from './index.less';
import IconFont from '../../../components/IconFont';
import BrokenLine from './components/BrokenLine';
import LiquidLevel from './components/LiquidLevel';
import DeviceStatistics from './components/DeviceStatistics';
import OperatingRate from './components/OperatingRate';
import FaultRate from './components/FaultRate';
import PH from './components/PH';
import SelectMonthOrYear from '../../../components/SelectMonthOrYear';
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
const element = React.createElement(
    'colums',
    { className: 'greeting' },
);
/*时间选择*/
const { RangePicker } = DatePicker;
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

export default () => {
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
                        id="menu.dashboard.trends"
                        defaultMessage="trends"
                    />
                }
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.bgyy}>
            <Content className={styles.cbg}>
                <div className={styles.bzmenu}>
                    <div className={styles.town_name}>
                        <FormattedMessage
                            id="menu.dashboard.analysis.town.shishan"
                            defaultMessage="shishan"
                        />
                    </div>
                    <span><BzMenu /></span></div>
                
                <div className={styles.ft_r}>
                    <SelectMonthOrYear />
                </div>
            </Content>
            <Row className={styles.dyph}>
                <Col sm={24} lg={24}  xl={16}>
                    <h4 className={styles.title}>电流<span>(A)</span></h4>
                    <BrokenLine />
                </Col>
                <Col sm={24} lg={24}  xl={8}>
                    <h4 className={styles.title}>液位<span>(M)</span></h4>
                    <LiquidLevel />
                    <h4 className={styles.title}>PH值<span>(pH)</span></h4>
                    <PH />
                </Col>
            </Row>
            <div className={styles.cardlist}>
                <Row gutter={16}>
                    <Col sm={24} lg={12} xl={12} xxl={6} className={styles.cardlist_info}>
                        <Card bordered={false}>
                            <h4 className={styles.title}>流量统计</h4>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Statistic title="瞬时流量" value={'1.45'} prefix={<IconFont type="icon-liuliang" style={{ fontSize: '32px', color: '#A3A0FB' }} />} suffix="m³/h"  />
                                </Col>
                                <Col span={24}>
                                    <Statistic title="累计流量" value={949813} prefix={<IconFont type="icon-leijiliuliang" style={{ fontSize: '32px', color: '#A3A0FB' }} />} suffix="m³" />
                                </Col>
                            </Row>
        </Card>
                    </Col>
                    <Col sm={24} lg={12} xl={12} xxl={6} className={styles.cardlist_info}>
                        <Card bordered={false}>
                            <h4 className={styles.title}>设备统计</h4>
                            <DeviceStatistics />
        </Card>
                    </Col>
                    <Col sm={24} lg={12} xl={12} xxl={6} className={styles.cardlist_info}>
                        <Card bordered={false}>
                            <h4 className={styles.title}>设备运行率</h4>
                            <OperatingRate />
        </Card>
                    </Col>
                    <Col sm={24} lg={12} xl={12} xxl={6} className={styles.cardlist_info}>
                        <Card bordered={false}>
                            <h4 className={styles.title}>设备故障率</h4>
                            <FaultRate />
        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
};
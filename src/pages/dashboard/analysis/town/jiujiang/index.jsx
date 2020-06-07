import { Layout, Card, Divider, Table, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Statistic, Col, Tabs, Radio, Popover } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import BzMenuMini from '../../../../../components/BzMenuMini';
import styles from './index.less';
import { Link } from 'react-router-dom';
import IconFont from '../../../../../components/IconFont';
import TotalVolume from '../../../analysis/components/TotalVolume';
import RightContent from '@/components/GlobalHeader/RightContent';
import BzTotalVolume from '../../components/BzTotalVolume';
import IntervalStack from '../../components/FaultRate';
import IntervalStack3 from '../../components/IntervalStack3';
import StackingSmall from '../../components/StackingSmall';
import StackingBig from '../../components/StackingBig';
import OperatingRate from '../../components/OperatingRate';
import FaultRate from '../../components/FaultRate';
import SelectMonthOrYear from '../../../../../components/SelectMonthOrYear';
const { SubMenu } = Menu;
const { TabPane } = Tabs;
const { Header, Content, Sider } = Layout;
const menu = (
    <Menu overlay={menu}>
        <Menu.Item>
            <Link to="/dashboard/analysis"><FormattedMessage
                id="menu.dashboard.analysis"
                defaultMessage="analysis"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/monitor"><FormattedMessage
                id="menu.dashboard.monitor"
                defaultMessage="monitor"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/map"><FormattedMessage
                id="menu.dashboard.map"
                defaultMessage="map"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/historicaldata"><FormattedMessage
                id="menu.dashboard.historicaldata"
                defaultMessage="historicaldata"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/realtimedata"><FormattedMessage
                id="menu.dashboard.realtimedata"
                defaultMessage="realtimedata"
            /></Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <Link to="/dashboard/trends"><FormattedMessage
                id="menu.dashboard.trends"
                defaultMessage="trends"
            /></Link>
        </Menu.Item>
    </Menu>
);
/** */
/**气泡卡片内容 */
const content1 = (
    <div className={styles.popwidth}>
        <Row gutter={8}>
            <Col span={3}>
                <Statistic title="液位" value={4.3} suffix="m" />
            </Col>
            <Col span={3}>
                <Statistic title="PH值" value={5.3} suffix="ph" />
            </Col>
            <Col span={4}>
                <Statistic title="瞬时流量" value={12.8} suffix="m³/h" />
            </Col>
            <Col span={7}>
                <Statistic title="累计流量" value={9339832} suffix="m³" />
            </Col>
            <Col span={7}>
                <Button style={{ marginRight: 8, marginTop: 16 }}>趋势详情</Button>
                <Button style={{ marginTop: 16 }}>工艺监控</Button>
            </Col>
        </Row>
    </div>
);
const content2 = (
    <div className={styles.popwidth}>
        <Row gutter={8}>
            <Col span={3}>
                <Statistic title="液位" value={4.3} suffix="m" />
            </Col>
            <Col span={3}>
                <Statistic title="PH值" value={5.3} suffix="ph" />
            </Col>
            <Col span={4}>
                <Statistic title="瞬时流量" value={12.8} suffix="m³/h" />
            </Col>
            <Col span={7}>
                <Statistic title="累计流量" value={9339832} suffix="m³" />
            </Col>
            <Col span={7}>
                <Button style={{ marginRight: 8, marginTop: 16 }}>趋势详情</Button>
                <Button style={{ marginTop: 16 }}>工艺监控</Button>
            </Col>
        </Row>
    </div>
);
const content3 = (
    <div className={styles.popwidth}>
        <Row gutter={8}>
            <Col span={3}>
                <Statistic title="液位" value={4.3} suffix="m" />
            </Col>
            <Col span={3}>
                <Statistic title="PH值" value={5.3} suffix="ph" />
            </Col>
            <Col span={4}>
                <Statistic title="瞬时流量" value={12.8} suffix="m³/h" />
            </Col>
            <Col span={7}>
                <Statistic title="累计流量" value={9339832} suffix="m³" />
            </Col>
            <Col span={7}>
                <Button style={{ marginRight: 8, marginTop: 16 }}>趋势详情</Button>
                <Button style={{ marginTop: 16 }}>工艺监控</Button>
            </Col>
        </Row>
    </div>
);
const content4 = (
    <div className={styles.popwidth}>
        <Row gutter={8}>
            <Col span={3}>
                <Statistic title="液位" value={4.3} suffix="m" />
            </Col>
            <Col span={3}>
                <Statistic title="PH值" value={5.3} suffix="ph" />
            </Col>
            <Col span={4}>
                <Statistic title="瞬时流量" value={12.8} suffix="m³/h" />
            </Col>
            <Col span={7}>
                <Statistic title="累计流量" value={9339832} suffix="m³" />
            </Col>
            <Col span={7}>
                <Button style={{ marginRight: 8, marginTop: 16 }}>趋势详情</Button>
                <Button style={{ marginTop: 16 }}>工艺监控</Button>
            </Col>
        </Row>
    </div>
);
const content5 = (
    <div className={styles.popwidth}>
        <Row gutter={8}>
            <Col span={3}>
                <Statistic title="液位" value={4.3} suffix="m" />
            </Col>
            <Col span={3}>
                <Statistic title="PH值" value={5.3} suffix="ph" />
            </Col>
            <Col span={4}>
                <Statistic title="瞬时流量" value={12.8} suffix="m³/h" />
            </Col>
            <Col span={7}>
                <Statistic title="累计流量" value={9339832} suffix="m³" />
            </Col>
            <Col span={7}>
                <Button style={{ marginRight: 8, marginTop: 16 }}>趋势详情</Button>
                <Button style={{ marginTop: 16 }}>工艺监控</Button>
            </Col>
        </Row>
    </div>
);
/** 气泡结束*/

const columns = [
    {
        title: '位置',
        dataIndex: 'location',
        key: 'location',
        width: 80,
        align: 'center',
    },
    {
        title: '报警内容',
        dataIndex: 'alarmcontent',
        key: 'alarmcontent',
        align: 'center',
    },
    {
        title: '等级',
        dataIndex: 'alarmlevel',
        key: 'alarmlevel',
        width: 50,
        align: 'center',
        render: level =>
            level == 1 ? <IconFont type="icon-alarmlevel01" style={{ fontSize: '18px', color: '#FFD800' }} /> : (level == 2 ? <IconFont type="icon-alarmlevel02" style={{ fontSize: '18px', color: '##FF6C00' }} /> : <IconFont type="icon-alarmlevel03" style={{ fontSize: '18px', color: '#FF0000' }} />),
    },
    {
        title: '报警时间',
        dataIndex: 'alarmtime',
        width: 95,
        key: 'alarmtime',
        align: 'center',
    }
];

const data = [];
for (let i = 0; i < 5; i++) {
    data.push({
        key: i,
        alarmtime: '12-24 23:12',
        location: '平二泵站',
        alarmcontent: '电流过大',
        alarmlevel: (i % 3) + 1,
    });
}
/*表格结束 */
/**end*/
const element = React.createElement(
    'colums',
    { className: 'greeting' },
);
/*时间选择*/
const { MonthPicker, RangePicker } = DatePicker;
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}
/**Tabs */
function callback(key) {
    console.log(key);
}
/**over */
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
                        id="menu.dashboard.analysis"
                        defaultMessage="analysis"
                    />
                }
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.bzmenu}>
            <div className={styles.town_name}>
                <FormattedMessage
                    id="menu.dashboard.analysis.town.jiujiang"
                    defaultMessage="jiujiang"
                />
            </div>
            <span><BzMenuMini /></span></div>
        <div className={styles.bgyy}>
            <Row className={styles.dyph}>
                <Col sm={24} md={24} lg={7} xl={6} xxl={5} >
                    <div className={styles.cbg}>
                        <div className={styles.one}>
                            <h5>昨日废水处理总量</h5>
                            <Statistic className={styles.statistic} value={9492813} prefix={<IconFont type="icon-feishuihui" style={{ fontSize: '32px', color: '#A3A0FB', marginRight: '16px', marginTop: '5px' }} />} suffix="m³" />
                        </div>
                    </div>
                    <div className={styles.cbg}>
                        <div className={styles.two}>
                            <SelectMonthOrYear />
                        </div>
                        <div className={styles.rankingtitle}>
                            <Tabs onChange={callback} type="card" className={styles.analysis_rate}>
                                <TabPane tab={<span style={{ fontSize: 14 }}>瞬时流量</span>} key="a" className={styles.rate_title}>
                                    <div className={styles.analysis_rate_con}>
                                        <BzTotalVolume />
                                        单位：m³/h
                                        <div className={styles.empty}></div>
                                    </div>
                                </TabPane>
                                <TabPane tab={<span style={{ fontSize: 14 }}>累计流量</span>} key="b" className={styles.rate_title}>
                                    <div className={styles.analysis_rate_con}>
                                        <BzTotalVolume />
                                        单位：m³
                                        <div className={styles.empty}></div>
                                    </div>
                                </TabPane>
                                <TabPane tab={<span style={{ fontSize: 14 }}>液位</span>} key="c" className={styles.rate_title}>
                                    <div className={styles.analysis_rate_con}>
                                        <BzTotalVolume />
                                        单位：m
                                        <div className={styles.empty}></div>
                                    </div>
                                </TabPane>
                                <TabPane tab={<span style={{ fontSize: 14 }}>PH值</span>} key="d" className={styles.rate_title}>
                                    <div className={styles.analysis_rate_con}>
                                        <BzTotalVolume />
                                        单位：ph
                                        <div className={styles.empty}></div>
                                    </div>
                                </TabPane>
                            </Tabs>

                        </div>

                    </div>
                </Col>
                <Col sm={24} md={24} lg={10} xl={12} xxl={14} className={styles.secmap}>
                    <div align="center">
                        <Popover className={styles.bz1} placement="top" content={content1} title="平一泵站" trigger="click">
                            <div><IconFont type="icon-bz1" style={{ fontSize: '24px' }} /><span className={styles.bz_name}>平一泵站</span></div>
                        </Popover>
                        <Popover className={styles.bz2} placement="top" content={content2} title="平二泵站" trigger="click">
                            <div><IconFont type="icon-bz1" style={{ fontSize: '24px' }} /><span className={styles.bz_name}>平二泵站</span></div>
                        </Popover>
                        <Popover className={styles.bz3} placement="top" content={content3} title="平三泵站" trigger="click">
                            <div><IconFont type="icon-bz1" style={{ fontSize: '24px' }} /><span className={styles.bz_name}>平三泵站</span></div>
                        </Popover>
                        <Popover className={styles.bz4} placement="top" content={content4} title="平四泵站" trigger="click">
                            <div><IconFont type="icon-bz1" style={{ fontSize: '24px' }} /><span className={styles.bz_name}>平四泵站</span></div>
                        </Popover>
                        <Popover className={styles.bz5} placement="top" content={content5} title="平五泵站" trigger="click">
                            <div><IconFont type="icon-bz1" style={{ fontSize: '24px' }} /><span className={styles.bz_name}>平五泵站</span></div>
                        </Popover>
                    </div>
                </Col>
                <Col sm={24} md={24} lg={7} xl={6} xxl={5} >
                    <div className={styles.town_alarm_info}>
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            title={() => '报警信息'}
                            bordered
                            size="middle"
                            style={{
                                fontSize: 12,
                                background: '#fff',
                            }}
                        />
                    </div>
                    <div className={styles.cbg}>
                        <div className={styles.two}>
                            <SelectMonthOrYear />
                        </div>

                        <Divider className={styles.analysis_divider} />
                        <div>
                            <h4>站点状态</h4>
                            <Row>
                                <div className={styles.stacking}>
                                    <StackingBig />
                                    <div className={styles.info}>
                                        <Statistic title="在线" value={1128} className={styles.ft_l} />
                                        <Statistic title="离线" value={93} className={styles.ft_r} />
                                    </div>
                                    <StackingSmall />
                                    <ul className={styles.smallcon}>
                                        <li className={styles.smallinfo}>
                                            <span><IconFont type="icon-circle" style={{ fontSize: '14px', color: '#A3A0FB', marginRight: '12px' }} /></span>运行
                        <p>368</p>
                                        </li>
                                        <li className={styles.smallinfo}>
                                            <span><IconFont type="icon-circle" style={{ fontSize: '14px', color: '#43425D', marginRight: '12px' }} /></span>停止
                        <p>549</p>
                                        </li>
                                        <li className={styles.smallinfo}>
                                            <span><IconFont type="icon-circle" style={{ fontSize: '14px', color: '#FF8484', marginRight: '12px' }} /></span>故障
                        <p>235</p>
                                        </li>
                                        <li className={styles.smallinfo}>
                                            <span><IconFont type="icon-circle" style={{ fontSize: '14px', color: '#D7DAE2', marginRight: '12px' }} /></span>低液位
                        <p>199</p>
                                        </li>
                                    </ul><Divider className={styles.analysis_divider} />
                                </div>
                                <div>
                                    <h4>任务数</h4>
                                    <Row>
                                        <Col span={16}>
                                            <IntervalStack3 />
                                        </Col>
                                        <Col span={8}>
                                            <ul className={styles.taskinfo}>
                                                <li>247次<span>60%</span></li>
                                                <li>120次<span>20%</span></li>
                                                <li>121次<span>12%</span></li>
                                            </ul>
                                        </Col>
                                    </Row><Divider className={styles.analysis_divider} />
                                </div>
                                <Tabs onChange={callback} type="card" className={styles.analysis_rate}>
                                    <TabPane tab={<span style={{ fontSize: 14 }}>设备运行率</span>} key="1" className={styles.rate_title}>
                                        <div className={styles.analysis_rate_con}>
                                            <OperatingRate />
                                            <div className={styles.empty}></div>
                                        </div>
                                    </TabPane>
                                    <TabPane tab={<span style={{ fontSize: 14 }}>设备故障率</span>} key="2" className={styles.rate_title}>
                                        <div className={styles.analysis_rate_con}>
                                            <FaultRate />
                                            <div className={styles.empty}></div>
                                        </div>
                                    </TabPane>
                                </Tabs>

                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
};
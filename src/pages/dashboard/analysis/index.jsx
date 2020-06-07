import { Layout, Card, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Statistic, Col,Tabs, Radio } from 'antd';
import { Link} from 'react-router-dom';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import BzMenu from '../../../components/BzMenu';
import styles from './index.less';
import IconFont from '../../../components/IconFont';
import TotalVolume from '../analysis/components/TotalVolume';
import BzTotalVolume from './components/BzTotalVolume';
import IntervalStack from './components/IntervalStack';
import IntervalStack3 from './components/IntervalStack3';
import StackingSmall from './components/StackingSmall';
import StackingBig from './components/StackingBig';
import OperatingRateTown from './components/OperatingRateTown';
import FaultRateTown from './components/FaultRateTown';
import SelectMonthOrYear from '../../../components/SelectMonthOrYear';
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
const element = React.createElement(
  'colums',
  { className: 'greeting' },
);
/*时间选择*/
const { MonthPicker,RangePicker } = DatePicker;
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
    <div className={styles.bgyy}>
      <Row className={styles.dyph}>
        <Col sm={24} md={24} lg={7} xl={6} xxl={5} >
          <div className={styles.cbg}>
            <div className={styles.one}>
            <h5>昨日废水处理总量</h5>
            <Statistic className={styles.statistic} value={9492813} prefix={<IconFont type="icon-feishuihui" style={{ fontSize: '32px', color: '#A3A0FB',marginRight:'16px',marginTop:'5px'}} />} suffix="m³" />
            </div> <Divider className={styles.analysis_divider} />
          <TotalVolume />
          <span className={styles.unit}>单位：m³</span>
          </div>
          <div className={styles.cbg}>
            <div className={styles.rankingtitle}>
              <Radio.Group defaultValue="a" className={styles.rankingtitle_con}>
                <Radio.Button value="a" className={styles.rankingtitle_con_1}>泵站瞬时流量排行</Radio.Button>
                <Radio.Button value="b" className={styles.rankingtitle_con_1}>泵站累计流量排行</Radio.Button>
              </Radio.Group>
            </div>
            <Tabs defaultActiveKey="1" tabBarGutter={4}>
              <TabPane tab={<span style={{ fontSize: 14 }}>桂城</span>} key="1">
                <BzTotalVolume />
                <span className={styles.unit2}>单位：m³/h</span>
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>里水</span>}  key="2">
                Content of tab 2
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>大沥</span>}  key="3">
                Content of tab 3
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>狮山</span>}  key="4">
                Content of tab 4
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>丹灶</span>}  key="5">
                Content of tab 5
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>西樵</span>}  key="6">
                Content of tab 6
            </TabPane>
              <TabPane tab={<span style={{ fontSize: 14 }}>九江</span>}  key="7">
                Content of tab 7
            </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col sm={24} md={24} lg={10} xl={12} xxl={14} className={styles.bigmap}>
          <div align="center">
            <img src="http://cgart-cn.oss-cn-shanghai.aliyuncs.com/guosong/bigmap2.png" width="829" height="867" border="0" useMap="#Map" />
            <map name="Map" id="Map">
              <area shape="circle" coords="370,300,100" href="#/dashboard/analysis/town/guicheng" title="狮山" target="_blank" />
              <area shape="circle" coords="560,190,90" href="#" title="里水" target="_blank" />
              <area shape="circle" coords="220,440,100" href="#" title="丹灶" target="_blank" />
              <area shape="circle" coords="260,645,100" href="#" title="西樵" target="_blank" />
              <area shape="circle" coords="325,800,70" href="#" title="九江" target="_blank" />
              <area shape="circle" coords="560,365,60" href="#" title="大沥" target="_blank" />
              <area shape="circle" coords="625,480,100" href="#" title="桂城" target="_blank" />
            </map>
          </div>
        </Col>
        <Col sm={24} md={24} lg={7} xl={6} xxl={5} className={styles.cbg}>
          <div className={styles.two}>
            <SelectMonthOrYear />
          </div>
          <div>
            <h4>报警</h4>
            <Row>
              <Col span={16}>
                <IntervalStack />
              </Col>
              <Col span={8}>
                <ul className={styles.alarminfo}>
                  <li>30次<span>30%</span></li>
                  <li>20次<span>20%</span></li>
                  <li>12次<span>12%</span></li>
                  <li>10次<span>10%</span></li>
                  <li>9次<span>9%</span></li>
                  <li>10次<span>10%</span></li>
                  <li>9次<span>9%</span></li>
                </ul>
              </Col>
            </Row>
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
                <TabPane tab={<span style={{ fontSize: 14}}>设备运行率</span>} key="1"  className={styles.rate_title}>
                  <div className={styles.analysis_rate_con}>
                    <OperatingRateTown />
                    <div className={styles.empty}></div>
                    </div>
                </TabPane>
                <TabPane tab={<span style={{ fontSize: 14 }}>设备故障率</span>} key="2" className={styles.rate_title}>
                  <div className={styles.analysis_rate_con}>
                    <FaultRateTown />
                    <div className={styles.empty}></div>
                    </div>
                </TabPane>
              </Tabs>
                
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  </div>
};
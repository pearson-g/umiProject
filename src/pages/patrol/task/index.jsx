import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Col, List, Avatar, NoContent } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import BzMenu from '../../../components/BzMenu';
import CombinationSearch from '../../../components/CombinationSearch';
import styles from './style.less';
import IconFont from '../../../components/IconFont';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/patrol/plan"><FormattedMessage
        id="menu.patrol.plan"
        defaultMessage="plan"
      /></Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/patrol/task"><FormattedMessage
        id="menu.patrol.task"
        defaultMessage="task"
      /></Link>
    </Menu.Item>
  </Menu>
);
const element = React.createElement(
  'colums',
  { className: 'greeting' },
);
/* */
const data3 = [
  {
    title:'平一泵站旧'
  },
  {
    title: '平一泵站新'
  },
    {
    title: '平二泵站旧'
  },
    {
    title: '平二泵站新'
  },
    {
    title: '平三泵站'
  },
    {
    title: '平四泵站'
  },
];
/*时间选择*/
const { RangePicker } = DatePicker;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

/*表格1 */
const columns = [
  {
    title: '序号',
    dataIndex: 'sn',
    key: 'sn',
    width: 45,
    align: 'center',
  },
  {
    title: '计划名称 ',
    dataIndex: 'planname',
    key: 'planname',
    align: 'center',
  },
  {
    title: '创建时间',
    dataIndex: 'createdate',
    key: 'createdate',
    align: 'center',
  },

  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
  },
  {
    title: '巡检周期',
    dataIndex: 'checkCycle',
    key: 'checkCycle',
    align: 'center',
  }, 
  
];

const tasklist = [];
for (let i = 0; i < 100; i++) {
  tasklist.push({
    key: i,
    id: i,
    createdate: '2020-12-24 23:12',
    sn: i + 1,
    planname: '巡检计划' + i,
    state: '已激活',
    checkCycle: '1小时',
  });
}
/*表格1结束 */
/*表格2 */
const columns2 = [
  {
    title: '序号',
    dataIndex: 'sn2',
    key: 'sn2',
    width: 45,
    align: 'center',
  },
  {
    title: '任务名称 ',
    dataIndex: 'taskname',
    key: 'taskname',
    align: 'center',
  },
  {
    title: '开始时间',
    dataIndex: 'starttime',
    key: 'starttime',
    align: 'center',
  },
  {
    title: '完成时间',
    dataIndex: 'overtime',
    key: 'overtime',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'state2',
    key: 'state2',
    align: 'center',
    render: level =>
      level == 1 ? [<i style={{ color: '#A3A6B4'}}>已完成</i>] : (level == 2 ? '执行中' : '未执行'),
  },
  {
    title: '执行人',
    dataIndex: 'pesona',
    key: 'pesona',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'edit',
    key: 'edit',
    align: 'center',
    render: text => (text ? <a><b>巡检数据</b></a> : <a>编辑</a>),
    
  },
];

const data2 = [];
for (let i = 0; i < 100; i++) {
  data2.push({
    key: i,
    starttime: '2020-12-24 23:12',
    overtime:'2020-12-24 23:12',
    sn2: i + 1,
    taskname: '巡检计划3-任务' + i,
    state2: (i % 3) + 1,
    pesona: '张三',
    edit: i % 3 == 0,
  });
}
/*表格2结束 */
export default class xxxx extends React.PureComponent {
  state = {
    rowId: 0
  }
  // 选中行
  onClickRow = (record) => {
    //console.log('onclickrow',record)
    return {
      onClick: () => {
        this.setState({
          rowId: record.id,
        });
      },
    };
  }
  setRowClassName = (record) => {
    //console.log('setRowClassName', record)
    return record.id === this.state.rowId ? 'clickRowStyl' : '';
  }
  render() {
  return <div>
    <Breadcrumb>
      <Breadcrumb.Item overlay={menu}>
        <FormattedMessage
          id="menu.patrol"
          defaultMessage="patrol"
        />
      </Breadcrumb.Item>
      <Breadcrumb.Item className={styles.color_bd}>
        {
          <FormattedMessage
            id="menu.patrol.task"
            defaultMessage="task"
          />
        }
      </Breadcrumb.Item>
    </Breadcrumb>
    <Content className={styles.cbg}>
      <div className={styles.bzmenu}>
        <div className={styles.town_name}>
          <FormattedMessage
            id="menu.patrol.task"
            defaultMessage="task"
          />
        </div>
        </div>
      <CombinationSearch />
    </Content>
    <div className={styles.r_content}>
      <Row>
        <Col sm={24} md={24} lg={24} xl={8}>
          <Table
            columns={columns}
            dataSource={tasklist}
            pagination={{ size: 'small', pageSizeOptions: ['10', '20', '30', '50'], defaultPageSize:'20', showSizeChanger: true }}
            bordered
            size="middel"
            onRow={this.onClickRow}
            rowClassName={this.setRowClassName}    
            className={styles.thead_two} 
        />
      </Col>
        <Col sm={24} md={24} lg={24} xl={16}>
          <div className={styles.empty_F5F6FA}></div>
          <div className={styles.task_details}>
          <h4 className={styles.task_details_h4}>巡检计划5<span>启用</span></h4>
          <div className={styles.basic_info}>
            <p>开始时间：2019-09-18 12:00</p>
            <p>结束时间：2019-09-18 12:00</p>
            <p>执行人：张萌粥</p>
            <p>计划周期：1小时</p>
          </div>
          <div className={styles.basic_info}>
              <List className={styles.route}
                itemLayout="horizontal"
                dataSource={data3}
                grid={{ gutter: 8, column: 8 }}
                renderItem={item => (
                  <List.Item>
                    <div className={styles.basic_info_con}><List.Item.Meta
                      avatar={<Avatar src="http://img1.cgart.me/guosong/ic-bengzhan.png" />}
                      title={item.title}
                    /></div><div className={styles.basic_info_arrow}><IconFont type="icon-jiantou" style={{ paddingTop: '10px', paddingRight: '8px', fontSize: '18px', color: '#A3A6B4' }} /></div>
                  </List.Item>
                )}
                />
          </div>
            <div className={styles.clear}></div>
            <div className={styles.x_search}>
              <RangePicker
                ranges={{
                  '今天': [moment().startOf('day'), moment()],
                  '昨天': [moment().startOf('day').subtract(1, 'days'), moment().endOf('day').subtract(1, 'days')],
                  '最近一周': [moment().startOf('day').subtract(1, 'weeks'), moment()],
                  '本月': [moment().startOf('month'), moment().endOf('month')],
                }}
                showTime={{
                  hideDisabledOptions: true,
                  defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')],
                }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
                onChange={onChange}
                onOk={onOk}
                style={{}}
              />
              <Button type="primary" style={{ marginLeft: 8 }}>查询</Button>
            </div>
            <Table
              columns={columns2}
              dataSource={data2}
              pagination={{size:'small' }}
              bordered
              size="middel"
              className={styles.thead_one}
            />
          </div>
      </Col>
      </Row>
    </div>
    
  </div>


}
}
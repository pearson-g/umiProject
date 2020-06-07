import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Row, Col, List, Avatar, Tabs, Descriptions, Badge,Input, NoContent} from 'antd';
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
const element = React.createElement(
    'colums', 
    { className: 'greeting' },
);
/* */
const data3 = [
    {
        title: '平一泵站旧'
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
/** */
function callback(key) {
    console.log(key);
}
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
        title: '设备名称 ',
        dataIndex: 'devicename',
        key: 'devicename',
        align: 'center',
    },
    {
        title: '设备型号',
        dataIndex: 'devicetype',
        key: 'devicetype',
        align: 'center',
    },

    {
        title: '生产厂商',
        dataIndex: 'manufacturer',
        key: 'manufacturer',
        align: 'center',
    },
    {
        title: '设备状态',
        dataIndex: 'devicestate',
        key: 'devicestate',
        align: 'center',
    },

];

const devicelist = [];
for (let i = 0; i < 9; i++) {
    devicelist.push({
        key: i,
        id:i,
        devicetype: '格栅',
        sn: i + 1,
        devicename: '1#格栅',
        manufacturer: '佛山市一二三四电气设备有限公司',
        devicestate: '在用',
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
        title: '条目名称 ',
        dataIndex: 'entryname',
        key: 'entryname',
        align: 'center',
    },
    {
        title: '单位',
        dataIndex: 'unit',
        key: 'unit',
        align: 'center',
    },
    {
        title: '数值类型',
        dataIndex: 'valuetype',
        key: 'valuetype',
        align: 'center',
    },
    {
        title: '量程下限',
        dataIndex: 'lowerrange',
        key: 'lowerrange',
        align: 'center',
    },
    {
        title: '量程上限',
        dataIndex: 'highrange',
        key: 'highrange',
        align: 'center',
    },
    {
        title: '报警下限',
        dataIndex: 'loweralert',
        key: 'loweralert',
        align: 'center',
    },
    {
        title: '报警上限',
        dataIndex: 'highalert',
        key: 'highalert',
        align: 'center',
    },
    {
        title: '预报警下限',
        dataIndex: 'setloweralert',
        key: 'setloweralert',
        align: 'center',
    },
    {
        title: '预报警上限',
        dataIndex: 'sethighalert',
        key: 'sethighalert',
        align: 'center',
    },
    {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record) => (
            <span>
                <a>编辑</a>
                <Divider type="vertical" />
                <a>删除</a>
                <Divider type="vertical" />
                <a>配置</a>
            </span>
        ),
    },
];

const data2 = [];
for (let i = 0; i < 5; i++) {
    data2.push({
        key: i,
        sn2: i + 1,
        entryname: '运行状态',
        unit: '-',
        valuetype: '开关值',
        lowerrange:'0',
        highrange:'60',
        loweralert:'0',
        highalert:'55',
        setloweralert:'0',
        sethighalert:'50',
    });
}
/*表格2结束 */
export default class xxxx extends React.PureComponent{
    state={
        rowId:0
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
                    id="menu.asset"
                    defaultMessage="asset"
                />
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.color_bd}>
                {
                    <FormattedMessage
                        id="menu.asset.equipment"
                        defaultMessage="equipment"
                    />
                }
            </Breadcrumb.Item>
        </Breadcrumb>
        <Content className={styles.cbg}>
            <div className={styles.bzmenu}>
                <div className={styles.town_name}>
                    <FormattedMessage
                        id="menu.dashboard.analysis.town.guicheng"
                        defaultMessage="guicheng"
                    />
                </div>
                <span><BzMenu /></span></div>
            <Tabs defaultActiveKey="a1" onChange={callback}>
                <TabPane tab="机械设备" key="a1">
                </TabPane>
                <TabPane tab="电气设备" key="a2">
                </TabPane>
                <TabPane tab="自控设备" key="a3">
                </TabPane>
                <TabPane tab="仪表设备" key="a4">
                </TabPane>
                <TabPane tab="其他设备" key="a5">
                </TabPane>
            </Tabs>
        </Content>
        <div className={styles.r_content}>
            <Row>
                <Col sm={24} md={24} lg={24} xl={8} className={styles.l_list}>
                    <Table
                        columns={columns}
                        dataSource={devicelist}
                        pagination={false}
                        // pagination={{ pageSizeOptions: ['10', '20', '30', '50'], defaultPageSize: '20', showSizeChanger: true, hideOnSinglePage: false,}}
                        bordered
                        size="middel"
                        onRow={this.onClickRow}
                        rowClassName={this.setRowClassName}
                        className={styles.thead_two}                    
                    />
                    <Button type="dashed" block className={styles.add}>+ 增加明细</Button>
                </Col>
                <Col sm={24} md={24} lg={24} xl={16}>
                    <div className={styles.empty_F5F6FA}><CombinationSearch /><Button><Icon type="download" style={{ fontSize: '16px', color: '#A3A0FB' }} />模板下载</Button><Button><Icon type="cloud-upload" style={{ fontSize: '16px', color: '#A3A0FB' }} />文件上传</Button></div>
                    <div className={styles.asset_details}>
                        <div className={styles.info}>
                            <h4 className={styles.asset_details_h4}>1#格栅</h4><Button><Icon type="edit" style={{ fontSize: '16px', color: '#A3A0FB' }} />编辑</Button><Button><Icon type="delete" style={{ fontSize: '16px', color: '#A3A0FB' }} />删除</Button><Button><Icon type="bug" style={{ fontSize: '16px', color: '#A3A0FB' }} />报废</Button>
                        </div>
                        <div className={styles.basic_info}>
                            <Descriptions>
                                <Descriptions.Item label="设备编号">GS1</Descriptions.Item>
                                <Descriptions.Item label="设备重量">-</Descriptions.Item>
                                <Descriptions.Item label="生产厂商">佛山市一二三四电气设备有限公司</Descriptions.Item>
                                <Descriptions.Item label="设备型号">-</Descriptions.Item>
                                <Descriptions.Item label="轮廓尺寸">-</Descriptions.Item>
                                <Descriptions.Item label="供应商">-</Descriptions.Item>        
                                <Descriptions.Item label="设备类别">电气装备</Descriptions.Item>
                                <Descriptions.Item label="采购日期">2019-04-09</Descriptions.Item>
                                <Descriptions.Item label="联系方式">-</Descriptions.Item>    
                                <Descriptions.Item label="设备状态">在用</Descriptions.Item>
                                <Descriptions.Item label="投运日期">2019-04-09</Descriptions.Item>
                                <Descriptions.Item label="采购价格">-</Descriptions.Item>
                            </Descriptions>
                            <div className={styles.clear}></div>
                        </div>
                        <div className={styles.menu}>
                            <Tabs defaultActiveKey="b1" onChange={callback}>
                                <TabPane tab="配件信息" key="b1">
                                    <div className={styles.search}>
                                        <Input size="small" style={{ width: 200, marginRight: 8 }} />
                                        <Button size="small">查询</Button>
                                    </div>
                                    <div>
                                        <Table
                                            columns={columns2}
                                            dataSource={data2}
                                            pagination={false}
                                            // pagination={{ pageSizeOptions: ['10', '20', '30', '50'], defaultPageSize: '10', showSizeChanger: true, hideOnSinglePage: false, }}
                                            bordered
                                            size="middel"
                                            className={styles.thead_one}
                                        />
                                        <Button type="dashed" block className={styles.add}>+ 增加明细</Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="设备条目" key="b2">设备条目</TabPane>
                                <TabPane tab="预警条件" key="b3">预警条件</TabPane>
                                <TabPane tab="故障信息" key="b4">故障信息</TabPane>
                                <TabPane tab="维保记录" key="b5">维保记录</TabPane>
                            </Tabs>
                        </div>                        
                        
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}
}
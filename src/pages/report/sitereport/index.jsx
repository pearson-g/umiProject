import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import BzMenu from '../../../components/BzMenu';
import styles from './index.less';
import IconFont from '../../../components/IconFont';
import SelectMonthOrYear from '../../../components/SelectMonthOrYear';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/report/devicereport"><FormattedMessage
                id="menu.report.devicereport"
                defaultMessage="devicereport"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/report/sitereport"><FormattedMessage
                id="menu.report.sitereport"
                defaultMessage="sitereport"
            /></Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/report/personareport"><FormattedMessage
                id="menu.report.personareport"
                defaultMessage="personareport"
            /></Link>
        </Menu.Item>
    </Menu>
);
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
/*按钮组合*/
const ButtonGroup = Button.Group;
//更多随机数据
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const city = ['平一泵站', '平二泵站', '平三泵站', '平四泵站', '平五泵站', '平六泵站', '石肯泵站', '中途泵站', '玉器街泵站'];
function randomNumber(min, max, d) {
    const r = Math.random() * (max - min) + min;
    var t = Math.pow(10, d);
    return Math.floor(r * t) / t;
}
//随机数据结束
/*表格 */
const columns = [
    {
        title: '序号',
        dataIndex: 'sn',
        key: 'sn',
        width: 40,
        align: 'center',
    },
    {
        title: '监测时间',
        dataIndex: 'date',
        key: 'date',
        width: 170,
        align: 'center',
    },
    {
        title: '运行状态+电流（A）',
        children: [
            {
                title: '1#格栅',
                dataIndex: 'gs1',
                key: 'gs1',
                width: 65,
                align: 'center',
            },
            {
                title: '2#格栅',
                dataIndex: 'gs2',
                key: 'gs2',
                width: 65,
                align: 'center',
            },
            {
                title: '1#提升泵',
                dataIndex: 'tsbA1',
                key: 'tsbA1',
                width: 100,
                align: 'center',
            },
            {
                title: '2#提升泵',
                dataIndex: 'tsbA2',
                key: 'tsbA2',
                width: 100,
                align: 'center',
            },
            {
                title: '3#提升泵',
                dataIndex: 'tsbA3',
                key: 'tsbA3',
                width: 100,
                align: 'center',
            },
            {
                title: '4#提升泵',
                dataIndex: 'tsbA4',
                key: 'tsbA4',
                width: 100,
                align: 'center',
            },
        ],
    },
    {
        title: '液位（m）',
        dataIndex: 'liquidLevel',
        key: 'liquidLevel',
        width: 80,
        align: 'center',
    },
    {
        title: 'PH',
        dataIndex: 'ph',
        key: 'ph',
        width: 60,
        align: 'center',
    },
    {
        title: '瞬时流量（m³/h）',
        dataIndex: 'instantaneousFlowrate',
        key: 'instantaneousFlowrate',
        width: 100,
        align: 'center',
    },
    {
        title: '累计流量（m³）',
        dataIndex: 'cumulativeFlowrate',
        key: 'cumulativeFlowrate',
        width: 120,
        align: 'center',
    },
    {
        title: '累计运行时间（h）/ 频率（HZ）',
        children: [
            {
                title: '1#提升泵',
                dataIndex: ['tsbCumulativetimeAndHz1'],
                key: ['tsbCumulativetimeAndHz1'],
                width: 120,
                align: 'center',

            },
            {
                title: '2#提升泵',
                dataIndex: ['tsbCumulativetimeAndHz2'],
                key: ['tsbCumulativetimeAndHz2'],
                width: 120,
                align: 'center',
            },
            {
                title: '3#提升泵',
                dataIndex: ['tsbCumulativetimeAndHz3'],
                key: ['tsbCumulativetimeAndHz3'],
                width: 120,
                align: 'center',
            },
            {
                title: '4#提升泵',
                dataIndex: ['tsbCumulativetimeAndHz4'],
                key: ['tsbCumulativetimeAndHz4'],
                width: 120,
                align: 'center',
            },
        ],

    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        date: '2020-12-24 23:12:00',
        sn: i + 1,
        gs1: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />,
        gs2: <IconFont type="icon-stop" style={{ fontSize: '14px', color: '#ccc', marginRight: '2px' }}/>,
        tsbA1: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, randomNumber(20, 90, 2)],
        tsbA2: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }}/>, randomNumber(20, 90, 2)],
        tsbA3: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }}/>, randomNumber(20, 90, 2)],
        tsbA4: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }}/>, randomNumber(20, 90, 2)],
        liquidLevel: randomNumber(2, 12, 1),
        ph: randomNumber(4, 10, 1),
        instantaneousFlowrate: randomNumber(2, 12, 1),
        cumulativeFlowrate: randomInt(100000, 400000),
        tsbCumulativetimeAndHz1: [randomInt(1000, 5000), '/', randomInt(10, 100)],
        tsbCumulativetimeAndHz2: [randomInt(1000, 5000), '/', randomInt(10, 100)],
        tsbCumulativetimeAndHz3: [randomInt(1000, 5000), '/', randomInt(10, 100)],
        tsbCumulativetimeAndHz4: [randomInt(1000, 5000), '/', randomInt(10, 100)],
    });
}
/*表格结束 */
export default () => {
    return <div>
        <Breadcrumb>
            <Breadcrumb.Item overlay={menu}>
                <FormattedMessage
                    id="menu.report"
                    defaultMessage="report"
                />
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.color_bd}>
                {
                    <FormattedMessage
                        id="menu.report.sitereport"
                        defaultMessage="sitereport"
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
            <div className={styles.ft_r}>
                <div className={styles.ft_l}><IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px', marginLeft: '8px' }} />运行<IconFont type="icon-stop" style={{ fontSize: '14px', color: '#ccc', marginRight: '2px', marginLeft: '8px' }} />停止<IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px', marginLeft: '8px' }} />故障
                <SelectMonthOrYear />
                </div>
                
            </div>
        </Content>
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            size="middel"
            scroll={{y: 680 }}
            style={{
                background: '#fff',
            }}
            className={styles.thead_one}
        />
    </div>;


};
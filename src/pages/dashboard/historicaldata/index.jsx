import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import BzMenu from '../../../components/BzMenu';
import { Link } from 'react-router-dom';
import styles from './index.less';
import IconFont from '../../../components/IconFont';
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
//更多随机数据
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
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
                width:100,
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
        title: '本次运行时间（min）/ 累计运行时间（h）',
        children: [
            {
                title: '1#提升泵',
                dataIndex: ['tsbThisAndCumulativetime1'],
                key: ['tsbThisAndCumulativetime1'],
                width: 120,
                align: 'center',
                
            },
            {
                title: '2#提升泵',
                dataIndex: ['tsbThisAndCumulativetime2'],
                key: ['tsbThisAndCumulativetime2'],
                width: 120,
                align: 'center',
            },
            {
                title: '3#提升泵',
                dataIndex: ['tsbThisAndCumulativetime3'],
                key: ['tsbThisAndCumulativetime3'],
                width: 120,
                align: 'center',
            },
            {
                title: '4#提升泵',
                dataIndex: ['tsbThisAndCumulativetime4'],
                key: ['tsbThisAndCumulativetime4'],
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
        gs1: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }}/>,
        gs2: <IconFont type="icon-stop" style={{ fontSize: '14px', color: '#ccc', marginRight: '2px' }}/>,
        tsbA1: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, randomNumber(20, 90, 2) ],
        tsbA2: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, randomNumber(20, 90, 2)],
        tsbA3: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, randomNumber(20, 90, 2)],
        tsbA4: [<IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, randomNumber(20, 90, 2)],
        liquidLevel: randomNumber(2,12,1) ,
        ph: randomNumber(4, 11, 1) ,
        instantaneousFlowrate: randomNumber(2, 12, 1) ,
        cumulativeFlowrate: randomInt(100000, 400000) ,
        tsbThisAndCumulativetime1: [randomInt(1, 60), '/', randomInt(50, 600)],
        tsbThisAndCumulativetime2: [randomInt(1, 60), '/', randomInt(50, 600)],
        tsbThisAndCumulativetime3: [randomInt(1, 60), '/', randomInt(50, 600)],
        tsbThisAndCumulativetime4: [randomInt(1, 60), '/', randomInt(50, 600)],
    });
}
/*表格结束 */
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
                        id="menu.dashboard.historicaldata"
                        defaultMessage="historicaldata"
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
                <div className={styles.ft_l}><IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginLeft: '8px', marginRight: '2px' }} />运行<IconFont type="icon-stop" style={{ fontSize: '14px', color: '#ccc', marginLeft: '8px', marginRight: '2px' }} />停止<IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginLeft: '8px', marginRight: '2px' }}/>故障</div>
                <span className={styles.searchgroup}>
                <RangePicker
                    showTime={{ format: 'HH:mm' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['开始时间', '结束时间']}
                    onChange={onChange}
                    onOk={onOk}
                    style={{}}
                    /></span>
                <Button type="primary">查询</Button>
            </div>
        </Content>
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSizeOptions: ['10', '20', '30', '50'], defaultPageSize: '20', showSizeChanger: true }}
            bordered
            size="middel"
            style={{
                background: '#fff',
            }}
            className={styles.thead_one}
        />
    </div>;


};
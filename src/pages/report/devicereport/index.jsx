import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Radio, Select} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import BzMenu from '../../../components/BzMenu';
import styles from './index.less';
import IconFont from '../../../components/IconFont';
import { select } from 'd3-selection';
import SelectMonthOrYear from '../../../components/SelectMonthOrYear';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/**select years */
const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
/** */
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
function renderNumber(text) {
    if (!Array.isArray(text)) return <></>;
    return text.filter(item=>item.value != 0)
        .map((item, i) =>
            <>{i > 0 ? <br /> : null}<span>{item.icon}{item.value}</span></>
        );
}
//更多随机数据
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const device = [
    '1#提升泵',
    '2#提升泵',
    '3#提升泵',
    '4#提升泵',
    '5#提升泵',
    '6#提升泵',
    '1#格栅',
    '2#格栅',
    '输送机',
];
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
        fixed: 'left',
    },
    {
        title: '监测设备',
        dataIndex: 'device',
        key: 'device',
        width: 100,
        align: 'center',
        fixed: 'left',
    },
    {
        title: '2019年9月 运行时间(分钟)',
        children: (new Array(31)).fill(1).map((v, i) => ({
            title: `${i + 1}`,
            dataIndex: `number${i + 1}`,
            key: `number${i + 1}`,
            width: 65,
            align: 'center',
            // 自定义表格换行方法
            render: renderNumber
        }))
    },
    {
        title: '运行率/故障率',
        dataIndex: 'operationRateAndFailureRate',
        key: 'operationRateAndFailureRate',
        width: 75,
        align: 'center',
        render: renderNumber,
        fixed: 'right',
    },
];

const data = [];
for (let i = 0; i < 30; i++) {
    data.push({
        key: i,
        device: device[randomInt(0, device.length)],
        sn: i + 1,
        number1: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: randomInt(10, 1000) }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />, value: 0 }],
        number2: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: randomInt(10, 1000) }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />, value: randomInt(10, 100)}],
        number3: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: 0 }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />, value: randomInt(10, 100) }],
        number4: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: 0 }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }}  />, value: 0 }],
        number5: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: randomInt(10, 100) }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }}  />, value: 0 }],
        number6: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: randomInt(10, 1000) }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />, value: randomInt(10, 100) }],
        operationRateAndFailureRate: [{ icon: <IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginRight: '2px' }} />, value: randomInt(1, 100) + "%" }, { icon: <IconFont type="icon-fault" style={{ fontSize: '14px', color: '#ff0000', marginRight: '2px' }} />, value: randomInt(1, 100) + "%" }],
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
                        id="menu.report.devicereport"
                        defaultMessage="devicereport"
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
                <div className={styles.ft_l}><IconFont type="icon-function" style={{ fontSize: '14px', color: '#45C700', marginLeft: '8px', marginRight: '2px' }} />运行<IconFont type="icon-fault" style={{ fontSize: '14px', color: '#FF0000', marginLeft: '8px', marginRight: '2px' }} />故障
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
            style={{
                background: '#fff',
            }}
            scroll={{ x: 2260,y:680 }}
            className={styles.thead_one}
        />
    </div>;


};
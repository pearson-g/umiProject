import { Layout, Card, Table, Divider, Tag, Menu, Dropdown, Breadcrumb, Icon, DatePicker, Button, Modal, Form, Input, Radio } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import BzMenu from '../../../components/BzMenu';
import IconFont from '../../../components/IconFont';
import CombinationSearch2 from '../../../components/CombinationSearch2';
import styles from './index.less';
import { Redirect } from 'umi';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
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
const city = [
    '平一泵站',
    '平二泵站',
    '平三泵站',
    '平四泵站',
    '平五泵站',
    '平六泵站',
    '石肯泵站',
    '中途泵站',
    '玉器街泵站',
];
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
/**表格数据 */

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        alarmtime: '2020-12-24 23:12:00',
        handletime: i % 3 == 0,
        sn: i + 1,
        alarmlocation: city[randomInt(0, city.length)],
        alarmdevice: device[randomInt(0, city.length)],
        alarmparameter: 'A厢电流',
        alarmcontent: '电流过大',
        alarmlevel: (i % 3) + 1,
        alarmstate: i % 3 == 0,
        executor: '张三',
        result: i % 3 == 0,
    });
}
/*表格结束 */
/**弹出窗口 */
const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            const { TextArea } = Input;
            return (
                <Modal
                    visible={visible}
                    title="解除报警"
                    okText="确定"
                    width="720px"
                    style={{top:180}}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item className="collection-create-form_last-form-item">
                            {getFieldDecorator('modifier', {
                                initialValue: 'public',
                            })(
                                <Radio.Group>
                                    <Radio value="public">误报</Radio>
                                    <Radio value="private">确认报警</Radio>
                                </Radio.Group>,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('description')(<TextArea rows={2} placeholder="备注" />)}
                        </Form.Item>
                        
                    </Form>
                </Modal>
            );
        }
    },
);
export default class App extends React.Component {
    /**Modal */
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };
    
/** */


    render() {
        /*表格头 */
        const columns = [
            {
                title: '序号',
                dataIndex: 'sn',
                key: 'sn',
                width: 50,
                align: 'center',
            },
            {
                title: '报警位置',
                dataIndex: 'alarmlocation',
                key: 'alarmlocation',
                width: 170,
                align: 'center',
            },
            {
                title: '报警设备',
                dataIndex: 'alarmdevice',
                key: 'alarmdevice',
                align: 'center',
            },
            {
                title: '报警参数',
                dataIndex: 'alarmparameter',
                key: 'alarmparameter',
                align: 'center',
            },
            {
                title: '报警内容',
                dataIndex: 'alarmcontent',
                key: 'alarmcontent',
                align: 'center',
            },
            {
                title: '报警等级',
                dataIndex: 'alarmlevel',
                key: 'alarmlevel',
                width: 80,
                align: 'center',
                render: level =>
                    level == 1 ? <IconFont type="icon-alarmlevel01" style={{ fontSize: '20px', color: '#FFD800' }} /> : (level == 2 ? <IconFont type="icon-alarmlevel02" style={{ fontSize: '20px', color: '##FF6C00' }} /> : <IconFont type="icon-alarmlevel03" style={{ fontSize: '20px', color: '#FF0000' }} />),
            },
            {
                title: '报警状态',
                dataIndex: 'alarmstate',
                key: 'alarmstate',
                align: 'center',
                render: text =>
                    text ? <span className={styles.colorred}>未解除</span> : '已解除',
            },
            {
                title: '报警时间',
                dataIndex: 'alarmtime',
                key: 'alarmtime',
                align: 'center',
            },
            {
                title: '处理时间',
                dataIndex: 'handletime',
                key: 'handletime',
                align: 'center',
                render: text =>
                    text ? '-' : '2019-07-29 10:37:00',
            },
            {
                title: '处理人',
                dataIndex: 'executor',
                key: 'executor',
                align: 'center',
                width: 100,
            },
            {
                title: '处理结果',
                dataIndex: 'result',
                key: 'result',
                align: 'center',
                width: 80,
                render: text => (text ? <a onClick={this.showModal}><b>解除</b></a> : <a style={{ color: '#cccccc' }}>查看</a>),
            },
        ];
        return  <div>
        <Breadcrumb>
            <Breadcrumb.Item>
                <FormattedMessage
                    id="menu.alarm"
                    defaultMessage="alarm"
                />
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.color_bd}>
                {
                    <FormattedMessage
                        id="menu.alarm.alarmdata"
                        defaultMessage="alarmdata"
                        
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
                <div className={styles.ft_l} style={{marginTop:'2px'}}>报警等级<IconFont type="icon-alarmlevel01" style={{ fontSize: '20px', color: '#FFD800', marginRight: '8px',marginLeft:'8px' }} /><IconFont type="icon-alarmlevel02" style={{ fontSize: '20px', color: '##FF6C00', marginRight: '8px'}} /><IconFont type="icon-alarmlevel03" style={{ fontSize: '20px', color: '#FF0000' }} /></div>
                <CombinationSearch2 />
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
            className={styles.thead_two}
        />
            <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
            />
    </div>
    }
}; 
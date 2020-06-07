import { Input, Button, Select, InputNumber, DatePicker, Icon } from 'antd';
import styles from './index.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { RangePicker } = DatePicker;
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
function onOk(value) {
    console.log('onOk: ', value);
}
const InputGroup = Input.Group;
const { Option } = Select;

export default class CompactDemo extends React.Component {
    state = {
        mode: 'planName',
    };
    handleChange = value => {
        this.setState({
            mode: value
        });
    };
    render() {
    const mode = this.state.mode;
    return <div className={styles.ft_r}>
            <div className={styles.searchgroup}>
            <InputGroup compact >
                <Select defaultValue="planName" onChange={this.handleChange}>
                    <Option value="planName">计划名称</Option>
                    <Option value="creationTime">创建时间</Option>
                </Select>
                {mode === 'planName' ? <Input style={{ width: '48%' }} placeholder="请输入" /> : <RangePicker
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
                />}
                <Select defaultValue="all">
                    <Option value="all">全部</Option>
                    <Option value="part1">部分1</Option>
                </Select>
            </InputGroup>
            </div>
            <Button type="primary">查询</Button>
        </div>
};
};
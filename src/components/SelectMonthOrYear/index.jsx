import { Input, Button, Select, InputNumber, DatePicker, Icon, Radio, ConfigProvider } from 'antd';
import styles from './index.less';
import moment from 'moment';
/**select MonthOrYear */
const { MonthPicker, RangePicker } = DatePicker;
const monthFormat = 'YYYY/MM';
function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}
function onOk(value) {
    console.log('onOk: ', value);
}
/** */
const InputGroup = Input.Group;
const { Option } = Select;

export default class CompactDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'a',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    
    render() {
    const mode = this.state.mode;
    return <div className={styles.ft_r}>          
            <div className={styles.two}>
            <ConfigProvider autoInsertSpaceInButton={false}><Button type="link" className={styles.linkbutton}>今天</Button></ConfigProvider>
            {mode === 'a' ? <MonthPicker defaultValue={moment()} format={monthFormat} style={{ width: 120, marginRight: 8, }} className={styles.month} /> : <Select defaultValue="2019" style={{ width: 80, marginRight: 8,}} onChange={onChange}>
                <Option value="2019">2019</Option>
                <Option value="2018">2018</Option>
                <Option value="2017">2017</Option>
                <Option value="2016">2016</Option>
                <Option value="2015">2015</Option>
                <Option value="2014">2014</Option>
            </Select>}
            <Radio.Group onChange={this.handleChange} value={mode} defaultValue="a">
                <Radio.Button value="a">月</Radio.Button>
                <Radio.Button value="b">年</Radio.Button>
            </Radio.Group>
            
        </div>
        </div>
};
};

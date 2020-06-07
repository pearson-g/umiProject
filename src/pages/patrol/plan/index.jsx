import { Layout, Button, Card, Icon, List, Typography, Breadcrumb, DatePicker, Menu, Input, Select, Tooltip, Row, Col, Form, Modal, Radio } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CombinationSearch from '../../../components/CombinationSearch';
import { connect } from 'dva';
import { StateType } from './model';
import { Dispatch } from 'redux';
import IconFont from '../../../components/IconFont';
import styles from './style.less';
/*面包屑*/
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
/* */
const { Paragraph } = Typography;
/**计划状态随机数 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const card_btn = [
  [<Button type="dashed" size={'small'} style={{float:'left',fontSize:'12px'}}>未激活</Button>],
  [<Button type="primary" size={'small'} style={{ float: 'left', fontSize: '12px', color: '#ffffff', backgroundColor:'#45C700', border:'none'}}>已激活</Button>],
  [<Button type="primary" size={'small'} style={{ float: 'left', fontSize: '12px', color: '#ffffff', backgroundColor: '#FF8484', border: 'none' }}>已终止</Button>],
  [<Button type="primary" size={'small'} style={{ float: 'left', fontSize: '12px', color: '#ffffff', backgroundColor: '#CCCCCC', border: 'none' }}>已完成</Button>],
];
/* */
@connect(({ listCardList, loading }) => ({
  listCardList,
  loading: loading.models.list,
}))
/** */
/** */
class CardList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'listCardList/fetch',
      payload: {
        count: 8,
      },
    });
  }
/** */
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  /** */
  render() {
    const {
      listCardList: { list },
      loading,
    } = this.props;
    const content = (
      <div className={styles.pageHeaderContent}>
        <p>
          执行人/周期：张梦舟（间隔2小时）
        </p>
        <p>
          创建时间：2019-9-18 12:00:00
        </p>
      </div>
    );
    const nullData = {};
    return (
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{
              gutter: 24,
              xxl: 6,
              xl: 4,
              lg: 3,
              md: 2,
              sm: 2,
              xs: 1,
            }}
            dataSource={[nullData, ...list]}
            pagination={{ pageSizeOptions: ['10', '20', '30', '50'], showSizeChanger: true }}
            renderItem={item => {
              if (item && item.id) {
                return (
                  <List.Item key={item.id}>
                    <Card
                      hoverable
                      className={styles.card}
                      actions={[
                        <Row>
                          <Col span={14} className={styles.card_btn}>{card_btn[randomInt(0, card_btn.length)]}</Col>
                          <Col span={10} className={styles.card_icon}>
                            <IconFont type="icon-shanchu1" style={{ paddingRight: '16px', fontSize: '16px', color: '#808093', float: 'right' }} key="delete" />
                            <IconFont type="icon-bianji1" style={{ paddingRight: '16px', fontSize: '16px', color: '#808093', float: 'right' }} key="edit" />
                            <IconFont type="icon-Group" style={{ paddingRight: '16px', fontSize: '16px', color: '#808093', float: 'right' }} key="copy" />
                          </Col>
                        </Row>
                        
                        
                      ]}
                    >
                      <Card.Meta
                        avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                        title={<a>{item.title}</a>}
                        description={
                          <Paragraph className={styles.item}>
                            {item.description}
                          </Paragraph>
                        }
                      />
                      <p>{content}</p>
                    </Card>
                  </List.Item>
                );
              }

              return (
                <List.Item>
                  <Button type="dashed" onClick={this.showModal} className={styles.newButton}>
                    <Icon type="plus" /> 新增计划
                  </Button>
                  <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Some1</p>
                    
                  </Modal>
                </List.Item>
              );
            }}
          />
        </div>
    );
  }
}
/*时间选择*/
const { MonthPicker, RangePicker } = DatePicker;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}
const { Header, Content, Sider } = Layout;
/**/
export default class App extends React.Component {

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
            id="menu.patrol.plan"
            defaultMessage="plan"
          />
        }
      </Breadcrumb.Item>
    </Breadcrumb>
    <Content className={styles.cbg}>
      <div className={styles.bzmenu}>
        <div className={styles.town_name}>
          <FormattedMessage
            id="menu.patrol.plan"
            defaultMessage="plan"
          />
        </div>
        </div>
      <CombinationSearch />
    </Content>
    <CardList 
    />

  </div>;
}
};
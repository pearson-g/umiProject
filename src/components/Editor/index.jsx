import React, { PureComponent } from 'react';
import { Drawer, Button, Form, Input, Select } from 'antd';
// import { connect } from 'dva';
// import { formatMessage } from 'umi-plugin-react/locale';
import IconFont from '../IconFont';
import MoveNode from './node';
import styles from './index.less';

class Editor extends PureComponent {
  state = {
    visible: false,
    nodeList: [
      {
        id: 1,
        bindId: 'DDWE2342',
        title: '1# 粗格栅',
        placement: 'top',
        left: 100,
        top: 100,
      },
      {
        id: 2,
        bindId: 'DDWE2342',
        title: '2# 粗格栅',
        placement: 'top',
        left: 100,
        top: 200,
      },
      {
        id: 3,
        bindId: 'DDWE2342',
        title: '1# 提升泵',
        placement: 'left',
        left: 400,
        top: 150,
      },
      {
        id: 4,
        bindId: 'DDWE2342',
        title: '2# 提升泵',
        placement: 'left',
        left: 400,
        top: 200,
      },
    ],
    selectedNode: {
      id: 0,
      bindId: '',
      title: '',
      placement: 'left',
    },
    background: {
      url: 'http://pic1.win4000.com/wallpaper/6/53e9b919a6f9b.jpg',
      width: 1920,
      height: 1200,
    },
  };

  // constructor(props) {
  //   super(props);
  // }

  setNode(node) {
    this.setState({
      selectedNode: node,
      visible: true,
    });
  }

  setNodePlacement(v) {
    const { nodeList, selectedNode } = this.state;
    if (selectedNode.id > 0) {
      const found = nodeList.find(ii => ii.id === selectedNode.id);

      found.placement = v;
      this.setState({
        // selectedNode: {
        //   ...this.state.selectedNode,
        //   placement: v
        // },
        nodeList: [...nodeList],
      });
    }
  }

  setNodeTitle(v) {
    const { nodeList, selectedNode } = this.state;
    if (selectedNode.id > 0) {
      const found = nodeList.find(ii => ii.id === selectedNode.id);
      found.title = v;
      this.setState({
        // selectedNode: {
        //   ...this.state.selectedNode,
        //   title: v
        // },
        nodeList: [...nodeList],
      });
    }
  }

  setNodeBindId(v) {
    const { nodeList, selectedNode } = this.state;
    if (selectedNode.id > 0) {
      const found = nodeList.find(ii => ii.id === selectedNode.id);
      found.bindId = v;
      this.setState({
        // selectedNode: {
        //   ...this.state.selectedNode,
        //   bindId: v
        // },
        nodeList: [...nodeList],
      });
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  setBackgroundSize(width, height) {
    const { background } = this.state;
    this.setState({
      background: {
        ...background,
        width,
        height,
      },
    });
  }

  addNewItem = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { nodeList } = this.state;
        const newNode = {
          ...values,
          left: 0,
          top: 0,
          id: 0, // 0表示新增
        };
        this.setState({
          nodeList: [...nodeList, newNode],
          visible: false,
        });
      }
    });
  };

  saveInputRef = input => {
    this.input = input;
  };

  selectImg = () => {
    // console.log(this.input.files[0])
    const reader = new FileReader();
    const { background } = this.state;
    reader.onload = e => {
      const imgFile = e.target.result;
      this.setState({
        background: {
          ...background,
          url: imgFile,
        },
      });
    };
    reader.readAsDataURL(this.input.files[0]);
  };

  newItem() {
    this.setState({
      selectedNode: {
        id: '',
        title: '',
        placement: 'left',
      },
      visible: true,
    });
    this.props.form.resetFields();
  }

  closeDrawer() {
    this.setState({ visible: false });
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div>
        <div>
          <input
            type="file"
            className={styles.file}
            ref={this.saveInputRef}
            accept="image/*"
            onChange={this.selectImg}
          />
          <Button.Group>
            <Button
              onClick={() => {
                this.input.click();
              }}
            >
              选择图片
            </Button>
            <Button
              onClick={() => {
                this.newItem();
              }}
            >
              添加
            </Button>
            <Button type="primary">保存</Button>
          </Button.Group>
        </div>
        <div className={styles.box}>
          <div className={styles.items_box}>
            <div
              className={styles.items}
              style={{ width: this.state.background.width, height: this.state.background.height }}
            >
              {this.state.nodeList.map(node => (
                <MoveNode
                  key={`${node.id}${node.bindId}`}
                  left={node.left}
                  top={node.top}
                  title={node.title}
                  placement={node.placement}
                  click={() => {
                    this.setNode(node);
                  }}
                >
                  <IconFont
                    type="icon-circle"
                    style={{ fontSize: '14px', color: '#03A0FB', marginRight: '12px' }}
                  />
                </MoveNode>
              ))}
            </div>
          </div>
          <img
            src={this.state.background.url}
            alt=""
            onLoad={e => {
              this.setBackgroundSize(e.target.width, e.target.height);
            }}
          />
        </div>
        <Drawer
          visible={this.state.visible}
          onClose={() => {
            this.closeDrawer();
          }}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Form.Item label="ID">
              {getFieldDecorator('bindId', {
                initialValue: this.state.selectedNode.bindId,
                rules: [{ required: true, message: '数量ID' }],
              })(
                <Input
                  placeholder="输入ID"
                  onChange={v => {
                    this.setNodeBindId(v.target.value);
                  }}
                />,
              )}
            </Form.Item>
            <Form.Item label="标题">
              {getFieldDecorator('title', {
                initialValue: this.state.selectedNode.title,
                rules: [{ required: true, message: 'Please enter' }],
              })(
                <Input
                  placeholder="标题"
                  onChange={v => {
                    this.setNodeTitle(v.target.value);
                  }}
                />,
              )}
            </Form.Item>
            <Form.Item label="位置">
              {getFieldDecorator('placement', {
                initialValue: this.state.selectedNode.placement,
                rules: [{ required: true, message: 'Please select an owner' }],
              })(
                <Select
                  placeholder="Please select an owner"
                  onChange={v => {
                    this.setNodePlacement(v);
                  }}
                >
                  <Select.Option value="top">顶部</Select.Option>
                  <Select.Option value="left">左边</Select.Option>
                  <Select.Option value="right">右边</Select.Option>
                  <Select.Option value="bottom">底部</Select.Option>
                  {/* <Select.Option value="topLeft">左上</Select.Option>
                  <Select.Option value="topRight">右上</Select.Option>
                  <Select.Option value="bottomLeft">左下</Select.Option>
                  <Select.Option value="bottomRight">右下</Select.Option>
                  <Select.Option value="leftTop">Maomao Zhou</Select.Option>
                  <Select.Option value="leftBottom">Maomao Zhou</Select.Option>
                  <Select.Option value="rightTop">Maomao Zhou</Select.Option>
                  <Select.Option value="rightBottom">Maomao Zhou</Select.Option> */}
                </Select>,
              )}
            </Form.Item>
          </Form>
          {this.state.selectedNode.id > 0 ? null : (
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                取消
              </Button>
              <Button onClick={this.addNewItem} type="primary">
                添加
              </Button>
            </div>
          )}
        </Drawer>
      </div>
    );
  }
}
export default Form.create()(Editor);

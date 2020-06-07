import React, { PureComponent } from 'react';
import { Tooltip } from 'antd';

class Drag extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      x: this.props.left || 0,
      y: this.props.top || 0,
    };
  }

  fn(ev) {
    const disx = ev.pageX - this.state.x;
    const disy = ev.pageY - this.state.y;
    const oldX = this.state.x;
    const oldY = this.state.y;
    document.onmousemove = mouseDownEvent => {
      this.setState({
        x: mouseDownEvent.pageX - disx,
        y: mouseDownEvent.pageY - disy,
      });
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      if (Math.abs(oldX - this.state.x) < 0.001 && Math.abs(oldY - this.state.y) < 0.001) {
        if (typeof this.props.click === 'function') {
          this.props.click();
        }
      }
    };
  }

  render() {
    const { children, title, placement } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
          cursor: 'move',
          userSelect: 'none',
        }}
        onMouseDown={this.fn.bind(this)}
      >
        <Tooltip
          overlayStyle={{ whiteSpace: 'nowrap' }}
          visible
          getPopupContainer={trigger => trigger.parentNode}
          title={title}
          placement={placement}
        >
          {children}
        </Tooltip>
      </div>
    );
  }
}
export default Drag;

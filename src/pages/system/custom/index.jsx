import { Breadcrumb, Menu, Icon, Button, Row, Col } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import IconFont from '../../../components/IconFont';
import React from 'react';
// import IconFont from '../../../components/IconFont';
import styles from './index.less';

const list = [
  {
    name: '在线监测',
    items: [
      {
        href: '/dashboard/analysis',
        langId: 'menu.dashboard.analysis',
        msg: 'analysis',
      },
      {
        href: '/dashboard/analysis/town/guicheng',
        langId: 'menu.dashboard.analysis.guicheng',
        msg: 'guicheng',
      },
      {
        href: '/dashboard/analysis/town/lishui',
        langId: 'menu.dashboard.analysis.lishui',
        msg: 'lishui',
      },
      {
        href: '/dashboard/analysis/town/dali',
        langId: 'menu.dashboard.analysis.dali',
        msg: 'dali',
      },
      {
        href: '/dashboard/analysis/town/shishan',
        langId: 'menu.dashboard.analysis.shishan',
        msg: 'shishan',
      },
      {
        href: '/dashboard/analysis/town/danzao',
        langId: 'menu.dashboard.analysis.danzao',
        msg: 'danzao',
      },
      {
        href: '/dashboard/analysis/town/xiqiao',
        langId: 'menu.dashboard.analysis.xiqiao',
        msg: 'xiqiao',
      },
      {
        href: '/dashboard/analysis/town/jiujiang',
        langId: 'menu.dashboard.analysis.jiujiang',
        msg: 'jiujiang',
      },
      {
        href: '/dashboard/monitor',
        langId: 'menu.dashboard.monitor',
        msg: 'monitor',
      },
      {
        href: '/dashboard/historicaldata',
        langId: 'menu.dashboard.historicaldata',
        msg: 'historicaldata',
      },
      {
        href: '/dashboard/realtimedata',
        langId: 'menu.dashboard.realtimedata',
        msg: 'realtimedata',
      },
      {
        href: '/dashboard/trends',
        langId: 'menu.dashboard.trends',
        msg: 'trends',
      },
    ],
  },
  {
    name: '巡检管理',
    items: [
      {
        href: '/patrol/task',
        langId: 'menu.patrol.task',
        msg: 'task',
      },
      {
        href: '/patrol/plan',
        langId: 'menu.patrol.plan',
        msg: 'plan',
      },
    ],
  },
  {
    name: '资产管理',
    items: [
      {
        href: '/asset/equipment',
        langId: 'menu.asset.equipment',
        msg: 'equipment',
      },
      {
        href: '/asset/maintainplan',
        langId: 'menu.asset.maintainplan',
        msg: 'maintainplan',
      },
      {
        href: '/asset/maintaintask',
        langId: 'menu.asset.maintaintask',
        msg: 'maintaintask',
      },
      {
        href: '/asset/accessory',
        langId: 'menu.asset.accessory',
        msg: 'accessory',
      },
      {
        href: '/asset/workorder',
        langId: 'menu.asset.workorder',
        msg: 'workorder',
      },
    ],
  },
  {
    name: '报警管理',
    items: [
      {
        href: '/alarm/alarmdata',
        langId: 'menu.alarm.alarmdata',
        msg: 'alarmdata',
      },
    ],
  },
  {
    name: '统计报表',
    items: [
      {
        href: '/report/devicereport',
        langId: 'menu.report.devicereport',
        msg: 'devicereport',
      },
      {
        href: '/report/sitereport',
        langId: 'menu.report.sitereport',
        msg: 'sitereport',
      },
      {
        href: '/report/personareport',
        langId: 'menu.report.personareport',
        msg: 'personareport',
      },
    ],
  },
  {
    name: '系统设置',
    items: [
      {
        href: '/system/001',
        langId: 'menu.system.a1',
        msg: 'a1',
      },
      {
        href: '/system/002',
        langId: 'menu.system.a2',
        msg: 'a2',
      },
      {
        href: '/system/003',
        langId: 'menu.system.a3',
        msg: 'a3',
      },
      {
        href: '/system/custom',
        langId: 'menu.system.custom',
        msg: 'custom',
      },
    ],
  },
];

export class xxxx extends React.PureComponent {
  addFavMenu(menu) {
    // console.log(menu);
    const type = 'global/addFavMenu';
    this.props.dispatch({
      type,
      payload: menu,
    });
    // this.props.dispatch({
    //     type: 'global/fetchFavMenus',
    // });
  }

  removeFavMenu(menu) {
    // console.log(menu);
    const type = 'global/removeFavMenu';
    this.props.dispatch({
      type,
      payload: menu,
    });
  }

  render() {
    const { favMenus } = this.props;
    const canAdd = favMenus.length < 5;
    const SysMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/system/001">
            <FormattedMessage id="menu.system.a1" defaultMessage="a1" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/002">
            <FormattedMessage id="menu.system.a2" defaultMessage="a2" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/003">
            <FormattedMessage id="menu.system.a3" defaultMessage="a3" />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/system/custom">
            <FormattedMessage id="menu.system.custom" defaultMessage="custom" />
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item overlay={SysMenu}>
            <FormattedMessage id="menu.system" defaultMessage="system" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {<FormattedMessage id="menu.system.custom" defaultMessage="custom" />}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.r_content}>
          <h5>快捷菜单，点击即可显示在顶部，再点击就会消失，顶部菜单显示顺序为点击的顺序，限选5个。</h5>
          <Row>
            {list.map(group => (
              <Col span={3}>
                <h4>{group.name}</h4>
                <ul>
                  {group.items.map(menu => (
                    <li key={menu.href}>
                      {favMenus.filter(f => f.href === menu.href).length > 0 ? (
                        <Button to={menu.href} type="link" onClick={() => this.removeFavMenu(menu)}>
                          <Icon type="star" theme="filled" style={{ fontSize: '16px' }}/>
                          <FormattedMessage id={menu.langId} defaultMessage={menu.msg} />
                        </Button>
                      ) : (
                        <Button
                          disabled={!canAdd}
                          to={menu.href}
                          type="link"
                          onClick={() => this.addFavMenu(menu)}
                        >
                            <Icon type="star" style={{ fontSize: '16px' }} />
                          <FormattedMessage id={menu.langId} defaultMessage={menu.msg} />
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
            <Col span={3}></Col>
            <Col span={3}></Col>
          </Row>
          <div className={styles.empty}></div>
        </div>
      </div>
    );
  }
}
export default connect(({ global }) => ({
  favMenus: global.favMenus,
}))(xxxx);

import { Tooltip } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import NoticeIconView from './NoticeIconView';
import { Link } from 'react-router-dom';

const GlobalHeaderRight = props => {
  const { theme, layout, favMenus } = props;
  let className = styles.right;
  if (theme === 'dark' && layout === 'topmenu') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <div className={className}>
      <div className={styles.favorite_menu}>
        <ul>
          {favMenus.map(item => (
            <li key={`link-${item.href}`}>
              <Link to={item.href}>
                <FormattedMessage id={item.langId} defaultMessage={item.msg} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.ft_r}>
        <Tooltip>
          <p target="_blank" rel="noopener noreferrer" className={styles.action}>
            <span className={styles.system_name}>南海瀚泓智慧泵站信息管理系统</span>
          </p>
        </Tooltip>
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder={formatMessage({
            id: 'component.globalHeader.search',
          })}
          dataSource={[
            formatMessage({
              id: 'component.globalHeader.search.example1',
            }),
            formatMessage({
              id: 'component.globalHeader.search.example2',
            }),
            formatMessage({
              id: 'component.globalHeader.search.example3',
            }),
          ]}
          onSearch={value => {
            console.log('input', value);
          }}
          onPressEnter={value => {
            console.log('enter', value);
          }}
        />

        <NoticeIconView />
        <Avatar menu />
        {/* <SelectLang className={styles.action} /> */}
      </div>
    </div>
  );
};

export default connect(({ settings, global }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
  favMenus: global.favMenus,
}))(GlobalHeaderRight);

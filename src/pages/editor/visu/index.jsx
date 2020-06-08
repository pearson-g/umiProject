import React from 'react';
import { Col, Row } from 'antd';
import styles from './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import VisuItemPanel from './components/VisuItemPanel';

export default class Visu extends React.Component{


    render(){
        return (
            <PageHeaderWrapper content={formatMessage({
                id: 'editor-koni.description',
                defaultMessage: 'description',
              })}>
                <Row type="flex" className={styles.editorHd}>
                <Col span={24}>
                {/* <VisuItemPanel /> */}
                </Col>
              </Row>
              <Row type="flex" className={styles.editorBd}>
                <Col span={4} className={styles.editorSidebar}>
                 <VisuItemPanel />
                </Col>
                <Col span={14} className={styles.editorContent}>
                {/* <VisuItemPanel /> */}
                </Col>
                <Col span={6} className={styles.editorSidebar}>
                {/* <VisuItemPanel /> */}
                </Col>
              </Row>
            </PageHeaderWrapper>
        )
    }
    
}
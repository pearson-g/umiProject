import React from 'react';
import { Tools } from './Items';
import styles from  './index.less';
import { Col, Row, Button,Icon  } from 'antd';


export default class VisuItemPanel extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tools: Tools,
            iconfont: { fontSize: '.24rem' }
        }
    }

    render(){
        return (
            <div>
               {
                   this.state.tools.map((item,index) => {
                       return (

                        <Row>
                            <Row>
                            {item.group}
                            </Row>
                            <Row>
                            {
                                    item.children.map((i,index) => {
                                        return (

                                            <Button  size={'small'}>
                                                {/* <Icon type={'iconfont ' + i.icon}/> */}
                                                <i className={'iconfont ' + i.icon} style={this.state.iconfont} />
                                            </Button>
                                        )
                                    })
                                }
                            </Row>
 
                        </Row>
                          
                       )
                   })
               }
            </div>
        )
    }


}


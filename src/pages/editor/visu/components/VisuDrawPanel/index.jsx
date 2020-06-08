// 1. 导入绘画引擎
import { Topology } from '@topology/core';
// 图形库
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';


export default class VisuDrawPanel extends React.Component {
    canvasRegister() {
        registerFlow();
        registerActivity();
        registerClass();
        registerSequence();
        registerChart();
    }
    canvas = null;
    canvasOptions = {};
    componentDidMount() {
        this.canvasRegister();
        this.canvasOptions.on = this.onMessage;
        this.canvas = new Topology('topology-canvas', this.canvasOptions);
    }

    render(){
        return (
            <div class="canvas" id="topo-canvas"></div>
        )
    }

}

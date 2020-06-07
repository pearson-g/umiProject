import React from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import autoHeight from '../autoHeight';
class Stacked extends React.Component {
    render() {
        const data = [
            {
                State: "1#格栅",
                运行时间: 25635,
                故障时间: 1890,
            },
            {
                State: "2#格栅",
                运行时间: 30352,
                故障时间: 1439,
            },
            {
                State: "1#提升泵",
                运行时间: 38253,
                故障时间: 2538,
            },
            {
                State: "2#提升泵",
                运行时间: 51896,
                故障时间: 7358,
            },
            {
                State: "3#提升泵",
                运行时间: 72083,
                故障时间: 5640,
            },
            {
                State: "4#提升泵",
                运行时间: 51896,
                故障时间: 7358,
            },
            {
                State: "输送机",
                运行时间: 51896,
                故障时间: 7358,
            },
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["运行时间", "故障时间"],
            // 展开字段集
            key: "运行时间",
            // key字段
            value: "故障时间",
            // value字段
            retains: ["State"] // 保留字段集，默认为除fields以外的所有字段
        });
        return (
            <div>
                <Chart height={300} data={dv} forceFit>
                    <Legend />
                    <Coord transpose />
                    <Axis
                        name="State"
                        label={{
                            offset: 12
                        }}
                    />
                    <Axis name="故障时间" />
                    <Tooltip />
                    <Geom
                        type="intervalStack"
                        position="State*故障时间"
                        color={['运行时间', ['#A3A1FB', '#FF6C00']]}
                    />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Stacked);

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
class Stackedpercentagecolumn extends React.Component {
    render() {
        const data = [
            {
                country: "运行",
                year: "站点状态",
                value: 368
            },
            {
                country: "停止",
                year: "站点状态",
                value: 549
            }
            ,
            {
                country: "故障",
                year: "站点状态",
                value: 72
            }
            ,
            {
                country: "低液位",
                year: "站点状态",
                value: 199
            }
        ];
        const ds = new DataSet();
        const dv = ds
            .createView()
            .source(data)
            .transform({
                type: "percent",
                field: "value",
                // 站点数量
                dimension: "country",
                // 状态的占比
                groupBy: ["year"],
                // 以不同产品类别为分组
                as: "percent"
            });
        const cols = {
            percent: {
                min: 0,

                formatter(val) {
                    return (val * 100).toFixed(2) + "%";
                }
            }
        };
        return (
            <div>
                <Chart height={30} data={dv} scale={cols} forceFit padding={{ left: 0, right: 0, bottom: 0, }}>
                    <Tooltip />
                    <Coord transpose />
                    <Geom
                        type="intervalStack"
                        position="year*percent"
                        color={['country', ['#A3A0FB', '#43425D', '#FF8484', '#D7DAE2']]}
                    />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Stackedpercentagecolumn);
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
                country: "在线",
                year: "站点状态",
                value: 668
            },
            {
                country: "离线",
                year: "站点状态",
                value: 249
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
                <Chart height={70} data={dv} scale={cols} forceFit padding={{ left: 0, right: 0, bottom: -40,top:-20 }}>
                    <Tooltip />
                    <Coord transpose />
                    <Geom
                        type="intervalStack"
                        position="year*percent"
                        color={['country', ['#A3A0FB', '#D7DAE2']]}
                    />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Stackedpercentagecolumn);
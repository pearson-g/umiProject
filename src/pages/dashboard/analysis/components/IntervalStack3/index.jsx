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
class Donut extends React.Component {
    render() {
        const { DataView } = DataSet;
        const { Html } = Guide;
        const data = [
            {
                item: "巡检任务",
                count: 247
            },
            {
                item: "维修任务",
                count: 120
            },
            {
                item: "保养任务",
                count: 121
            }
        ];
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = val * 100 + "%";
                    return val;
                }
            }
        };
        return (
            <div>
                <Chart
                    height={120}
                    data={dv}
                    scale={cols}
                    padding={{left: -10, top:-20, right: 80, bottom:-10, }}
                forceFit
            >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.75} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={-40}
                        offsetX={-0}
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html="<div style=&quot;color:#8c8c8c; font-size:0.8em; line-height: 1.8em; text-align: center; width: 10em;&quot;>任务总数<br><span style=&quot;color:#262626;font-size:2.2em&quot;>468</span></div>"
                            alignX="middle"
                            alignY="middle"
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                            "item*percent",
                            (item, percent) => {
                                percent = percent * 100 + "%";
                                return {
                                    name: item,
                                    value: percent
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    >
                       
                    </Geom>
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Donut);
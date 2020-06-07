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
                item: "桂城",
                count: 30
            },
            {
                item: "里水",
                count: 20
            },
            {
                item: "大沥",
                count: 12
            },
            {
                item: "西樵",
                count: 10
            },
            {
                item: "九江",
                count: 9
            },
            {
                item: "丹灶",
                count: 10
            },
            {
                item: "狮山",
                count: 9
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
                    height={170}
                    data={dv}
                    scale={cols}
                    padding={{left: -20, top:-20, right: 50, bottom:-20, }}
                forceFit
            >
                    <Coord type={"theta"} radius={0.75} innerRadius={0.8} />
                    <Axis name="percent" />
                    <Legend
                        position="right"
                        offsetY={-30}
                        offsetX={-0}
                    />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Guide>
                        <Html
                            position={["50%", "50%"]}
                            html="<div style=&quot;color:#8c8c8c; font-size:0.8em; line-height: 1.8em; text-align: center; width: 10em;&quot;>总报警数<br><span style=&quot;color:#262626;font-size:2.5em&quot;>1005</span></div>"
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
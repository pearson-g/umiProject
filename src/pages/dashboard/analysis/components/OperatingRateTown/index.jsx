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
class Comparedonut extends React.Component {
    render() {
        const data = [
            {
                town: '桂城街道',
                area: "运行率",
                profit: 89
            },
            {
                town: '桂城街道',
                area: "故障率",
                profit: 11
            },          
            {
                town: '里水镇',
                area: "运行率",
                profit: 98
            },
            {
                town: '里水镇',
                area: "故障率",
                profit: 2
            },
            {
                town: '大沥镇',
                area: "运行率",
                profit: 76
            },
            {
                town: '大沥镇',
                area: "故障率",
                profit: 24
            },
            {
                town: '狮山镇',
                area: "运行率",
                profit: 69
            },
            {
                town: '狮山镇',
                area: "故障率",
                profit: 31
            },
            {
                town: '西樵镇',
                area: "运行率",
                profit: 88
            },
            {
                town: '西樵镇',
                area: "故障率",
                profit: 12
            },
            {
                town: '九江镇',
                area: "运行率",
                profit: 94
            },
            {
                town: '九江镇',
                area: "故障率",
                profit: 6
            },
            {
                town: '丹灶镇',
                area: "运行率",
                profit: 83
            },
            {
                town: '丹灶镇',
                area: "故障率",
                profit: 17
            }

        ];
        const { DataView } = DataSet;
        const cols = {
            percent: {
                formatter: val => {
                    return (val * 100).toFixed(0) + "%";
                }
            }
        };
        let id = 0;
        return (
            <div>
                <Chart width={320} height={240} data={data} padding={{ left: -8, top: -12,right:-8,bottom:-30}} forceFit>
                    <Tooltip showTitle={false} />
                    <Facet
                        type="list"
                        fields={["town"]}
                        padding={0}
                        cols={4}
                        colTitle={{
                            offsetY: 25,
                            style: {
                                fontSize: 14,
                                fontWeight:"normal",
                                textAlign: "center",
                                fill: "#999"
                            }
                        }}
                        eachView={(view, facet) => {
                            const data = facet.data;
                            const dv = new DataView();
                            dv.source(data).transform({
                                type: "percent",
                                field: "profit",
                                dimension: "area",
                                as: "percent"
                            });
                            view.source(dv, {
                                percent: {
                                    formatter: val => {
                                        return (val * 100).toFixed(0) + "%";
                                    }
                                }
                            });
                            view.coord("theta", {
                                radius: 0.8,
                                innerRadius: 0.75
                            });
                            view.guide().html({
                        position: ['50%', '50%'],
                                html: '<div><p>' + (data[0].profit + '%') + '</p></div>'
                });
                view
                    .intervalStack()
                    .position("percent")
                    .color("area", ['#A3A1FB', '#eeeeee'])
                                .label("percent", {
                                    offset: -8
                                })
                                .style({
                                    lineWidth: 1,
                                    stroke: "#fff"
                                });
                                
                        }}
                    />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Comparedonut);
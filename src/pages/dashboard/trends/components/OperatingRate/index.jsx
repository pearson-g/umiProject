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
                year: '1#格栅',
                area: "运行率",
                profit: 89
            },
            {
                year: '1#格栅',
                area: "故障率",
                profit: 11
            },
            {
                year: '2#格栅',
                area: "运行率",
                profit: 98
            },
            {
                year: '2#格栅',
                area: "故障率",
                profit: 2
            },
            {
                year: '1#提升泵',
                area: "运行率",
                profit: 76
            },
            {
                year: '1#提升泵',
                area: "故障率",
                profit: 24
            },
            {
                year: '2#提升泵',
                area: "运行率",
                profit: 69
            },
            {
                year: '2#提升泵',
                area: "故障率",
                profit: 31
            },
            {
                year: '3#提升泵',
                area: "运行率",
                profit: 88
            },
            {
                year: '3#提升泵',
                area: "故障率",
                profit: 12
            },
            {
                year: '4#提升泵',
                area: "运行率",
                profit: 94
            },
            {
                year: '4#提升泵',
                area: "故障率",
                profit: 6
            },
            {
                year: '输送机',
                area: "运行率",
                profit: 83
            },
            {
                year: '输送机',
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
                <Chart width={320} height={280} data={data} padding={'auto'} forceFit>
                    <Tooltip showTitle={false} />
                    <Facet
                        type="list"
                        fields={["year"]}
                        padding={0}
                        cols={4}
                        colTitle={{
                            offsetY: 20,
                            style: {
                                fontSize: 12,
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
                                innerRadius: 0.7
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
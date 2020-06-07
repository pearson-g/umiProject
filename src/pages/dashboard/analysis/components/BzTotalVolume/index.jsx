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
class Basic extends React.Component {
    render() {
        const data = [
            {
                country: "石肯泵站",
                population: 217
            },
            {
                country: "中途泵站",
                population: 317
            },
            {
                country: "玉器街泵站",
                population: 449
            },
            {
                country: "东调泵站",
                population: 990
            },
            {
                country: "平六泵站",
                population: 1217
            },
            {
                country: "平五泵站",
                population: 517
            },
            {
                country: "平四泵站",
                population: 1317
            },
            {
                country: "平三泵站",
                population: 917
            },
            {
                country: "平二泵站新",
                population: 517
            },
            {
                country: "平二泵站旧",
                population: 417
            },
            {
                country: "平一泵站新",
                population: 1317
            }
            ,
            {
                country: "平一泵站旧",
                population: 817
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.source(data).transform({
            type: "sort",

            callback(a, b) {
                // 排序依据，和原生js的排序callback一致
                return a.population - b.population > 0;
            }
        });
        return (
            <div>
                <Chart height={440} data={dv} forceFit padding={{ left: 75, right: 20, bottom: 30}}>
                    <Coord transpose />
                    <Axis
                        name="country"
                        label={{
                            offset: 12
                        }}
                    />
                    <Axis name="population"/>
                    <Tooltip />
                    <Geom type="interval" position="country*population" color={['population', '#B5B3FD-#8B4EFF']} />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Basic);
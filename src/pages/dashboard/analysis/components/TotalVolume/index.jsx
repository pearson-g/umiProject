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
                country: "九江",
                population: 21744
            },
            {
                country: "丹灶",
                population: 31744
            },
            {
                country: "西樵",
                population: 44970
            },
            {
                country: "狮山",
                population: 99034
            },
            {
                country: "大沥",
                population: 121744
            },
            {
                country: "里水",
                population: 71744
            },
            {
                country: "桂城",
                population: 131744
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
                <Chart height={200} data={dv} forceFit padding={{ left: 40, right: 50, bottom:0, }}>
                    <Coord transpose />
                    <Axis
                        name="country"
                        label={{
                            offset: 12
                        }}
                    />
                    <Axis name="population" visible={false} />
                    <Tooltip />
                    <Geom type="interval" position="country*population" color={['population', '#B5B3FD-#8B4EFF']}>
                        <Label content="population*date" />
                    </Geom>
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Basic);
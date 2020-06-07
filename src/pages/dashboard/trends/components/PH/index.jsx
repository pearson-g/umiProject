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
import autoHeight from '../autoHeight';
class Curved extends React.Component {
    render() {
        const data = [
            {
                month: "1月",
                name: "PH值",
                ph: 5.4
            },
            {
                month: "2月",
                name: "PH值",
                ph: 6
            },
            {
                month: "3月",
                name: "PH值",
                ph: 6.2
            },
            {
                month: "4月",
                name: "PH值",
                ph: 6.5
            },
            {
                month: "5月",
                name: "PH值",
                ph: 6.3
            },
            {
                month: "6月",
                name: "PH值",
                ph: 5.8
            },
            {
                month: "7月",
                name: "PH值",
                ph: 5.5
            },
            {
                month: "8月",
                name: "PH值",
                ph: 5.2
            },
            {
                month: "9月",
                name: "PH值",
                ph: 5
            },
            {
                month: "10月",
                name: "PH值",
                ph: 5.2
            },
            {
                month: "11月",
                name: "PH值",
                ph: 5.7
            },
            {
                month: "12月",
                name: "PH值",
                ph: 6
            }
        ];
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        const scale = {
            ph: {
                type: "linear",
                min: 4,
                max: 9,
                tickCount: 7,
            },
            month: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <Chart height={240} data={data} scale={scale} forceFit>
                    {/* <Legend show={false} /> */}
                    <Axis name="month" />
                    <Axis
                        name="ph"
                        label={{
                            formatter: val => `${val}`
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="line"
                        position="month*ph"
                        size={1}
                        color={['name', 'rgba(167, 167, 255, 1)']}
                        shape={"smooth"}
                    />
                    <Geom
                        type="point"
                        position="month*ph"
                        size={4}
                        shape={"hollowCircle"}
                        color={'rgba(167, 167, 255, 1)'}
                        style={{
                            stroke: "#fff",
                            lineWidth: 2
                        }}
                    />
                    {/* <Geom type="area" position="month*ph" shape={'smooth'} color={['l (90) 0:rgba(167, 167, 255, 0.5) 1:rgba(167, 167, 255, 0.01)']} /> */}
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Curved);

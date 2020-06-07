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
                level: "液位",
                metre: 4
            },
            {
                month: "2月",
                level: "液位",
                metre: 3
            },
            {
                month: "3月",
                level: "液位",
                metre: 2.4
            },
            {
                month: "4月",
                level: "液位",
                metre: 2.5
            },
            {
                month: "5月",
                level: "液位",
                metre: 3
            },
            {
                month: "6月",
                level: "液位",
                metre: 4.2
            },
            {
                month: "7月",
                level: "液位",
                metre: 5.5
            },
            {
                month: "8月",
                level: "液位",
                metre: 6.3
            },
            {
                month: "9月",
                level: "液位",
                metre: 6
            },
            {
                month: "10月",
                level: "液位",
                metre: 7
            },
            {
                month: "11月",
                level: "液位",
                metre: 8
            },
            {
                month: "12月",
                level: "液位",
                metre: 6
            }
        ];
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        const scale = {
            metre: {
                type: "linear",
                min: 0,
                max: 9,
                tickCount: 6,
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
                        name="metre"
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
                        position="month*metre"
                        size={1}
                        color={['level', 'rgba(167, 167, 255, 1)']}
                        shape={"smooth"}
                    />
                    <Geom
                        type="point"
                        position="month*metre"
                        size={4}
                        shape={"hollowCircle"}
                        color={'rgba(167, 167, 255, 1)'}
                        style={{
                            stroke: "#fff",
                            lineWidth: 2
                        }}
                    />
                    <Geom type="area" position="month*metre" shape={'smooth'} color={['l (90) 0:rgba(167, 167, 255, 0.5) 1:rgba(167, 167, 255, 0.01)']} />
                </Chart>
            </div>
        );
    }
}

export default autoHeight()(Curved);

import React from 'react';
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
    Util,
} from 'bizcharts';
import autoHeight from '../autoHeight';
const { Line } = Guide;

class Series extends React.Component {
    render() {
        const data = [
            {
                month: '1月',
                city: '1#提升泵电流',
                revenue: 7,
            },
            {
                month: '1月',
                city: '2#提升泵电流',
                revenue: 3.9,
            },
            {
                month: '1月',
                city: '3#提升泵电流',
                revenue: 4.7,
            },
            {
                month: '2月',
                city: '1#提升泵电流',
                revenue: 3.9,
            },
            {
                month: '2月',
                city: '2#提升泵电流',
                revenue: 7.2,
            },
            {
                month: '2月',
                city: '3#提升泵电流',
                revenue: 11.2,
            },
            {
                month: '3月',
                city: '1#提升泵电流',
                revenue: 9.5,
            },
            {
                month: '3月',
                city: '2#提升泵电流',
                revenue: 5.7,
            },
            {
                month: '3月',
                city: '3#提升泵电流',
                revenue: 15.7,
            },
            {
                month: '4月',
                city: '1#提升泵电流',
                revenue: 10.5,
            },
            {
                month: '4月',
                city: '2#提升泵电流',
                revenue: 8.5,
            },
            {
                month: '4月',
                city: '3#提升泵电流',
                revenue: 12.5,
            },
            {
                month: '5月',
                city: '1#提升泵电流',
                revenue: 18.4,
            },
            {
                month: '5月',
                city: '2#提升泵电流',
                revenue: 11.9,
            },
            {
                month: '5月',
                city: '3#提升泵电流',
                revenue: 11.9,
            },
            {
                month: '6月',
                city: '1#提升泵电流',
                revenue: 16.5,
            },
            {
                month: '6月',
                city: '2#提升泵电流',
                revenue: 12.2,
            },
            {
                month: '6月',
                city: '3#提升泵电流',
                revenue: 15.2,
            },
            {
                month: '7月',
                city: '1#提升泵电流',
                revenue: 25.2,
            },
            {
                month: '7月',
                city: '2#提升泵电流',
                revenue: 17,
            },
            {
                month: '7月',
                city: '3#提升泵电流',
                revenue: 13,
            },
            {
                month: '8月',
                city: '1#提升泵电流',
                revenue: 26.5,
            },
            {
                month: '8月',
                city: '2#提升泵电流',
                revenue: 16.6,
            },
            {
                month: '8月',
                city: '3#提升泵电流',
                revenue: 7.6,
            },
            {
                month: '9月',
                city: '1#提升泵电流',
                revenue: 23.3,
            },
            {
                month: '9月',
                city: '2#提升泵电流',
                revenue: 14.2,
            },
            {
                month: '9月',
                city: '3#提升泵电流',
                revenue: 10.2,
            },
            {
                month: '10月',
                city: '1#提升泵电流',
                revenue: 18.3,
            },
            {
                month: '10月',
                city: '2#提升泵电流',
                revenue: 10.3,
            },
            {
                month: '10月',
                city: '3#提升泵电流',
                revenue: 13.3,
            },
            {
                month: '11月',
                city: '1#提升泵电流',
                revenue: 17.9,
            },
            {
                month: '11月',
                city: '2#提升泵电流',
                revenue: 16.6,
            },
            {
                month: '11月',
                city: '3#提升泵电流',
                revenue: 11.6,
            },
            {
                month: '12月',
                city: '1#提升泵电流',
                revenue: 19.6,
            },
            {
                month: '12月',
                city: '2#提升泵电流',
                revenue: 14.8,
            },
            {
                month: '12月',
                city: '3#提升泵电流',
                revenue: 12.8,
            },
        ];
        const cols = {
            month: {
                range: [0, 1],
            },
        };
        return (
            <div>
                <Chart height={468} data={data} scale={cols} forceFit>
                    <Legend />
                    <Axis name="month"/>
                    <Axis
                        name="revenue"
                        label={{
                            formatter: val => `${val}`,
                        }}
                    />
                    <Tooltip
                        crosshairs={{
                            type: 'y',
                        }}
                    />
                    <Geom type="line" position="month*revenue" size={1} color={['city', ['rgba(84, 216, 255, 1)', 'rgba(167, 167, 255, 1)','rgba(255, 208, 132, 1)']]} />
                    <Geom type="area" position="month*revenue" shape={'area'} color={['city', ['l (90) 0:rgba(84, 216, 255, 0.3) 1:rgba(84, 216, 255, 0.01)', 'l (90) 0:rgba(167, 167, 255, 0.3) 1:rgba(167, 167, 255, 0.01)', 'l (90) 0:rgba(255, 208, 132, 0.3) 1:rgba(255, 208, 132, 0.01)']]}/>
                    <Geom
                        type="point"
                        position="month*revenue"
                        size={5}
                        shape={'hollowCircle'}
                        color={['city', ['rgba(84, 216, 255, 1)', 'rgba(167, 167, 255, 1)', 'rgba(255, 208, 132, 1)']]}
                        style={{
                            stroke: '#fff',
                            lineWidth: 2,
                        }}
                    />
                </Chart>
            </div>
        );
    }
}


export default autoHeight()(Series);
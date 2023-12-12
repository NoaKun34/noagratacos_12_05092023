import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import './RadialChart.css'

function RadialBarChartComponent(props) {

    const value = props.chartData.data.todayScore * 100;

    const data = [
        {
            name: 'set',
            uv: 100,
            fill: '#FBFBFB',
        },
        {
            name: 'value',
            uv: value,
            fill: '#FF0000',
        },
    ];

    const roundedValue = Math.round(data[1].uv)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={10}
                    background={true}
                    label={{ position: 'center', fill: '#000000' }}
                    clockWise={true}
                    dataKey="uv"
                />
                <circle cx="50%" cy="50%" r="90" fill="#FFFFFF" />
                <text x="50%" y="50%" fill="black" className='radialTextValue' textAnchor="middle">{roundedValue}%</text>
                <text x="50%" y="59%" fill="black" className='radialText' textAnchor="middle">de votre</text>
                <text x="50%" y="68%" fill="black" className='radialText' textAnchor="middle">objectif</text>
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default RadialBarChartComponent;
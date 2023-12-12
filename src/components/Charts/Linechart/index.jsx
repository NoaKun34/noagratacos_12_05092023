import './LineChart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

function LineChartComponent(props) {

    const CustomCursor = ({ points }) => {
        return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={300} />;
    };
    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="customTooltipSession">
                    <p className="tooltipDataSession">{`${payload[0].value} `}min</p>
                </div>
            );
        }
        return null;
    }

    return props.chartData.data.sessions && (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={props.chartData.data.sessions}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 0,
                }}
            >
                <text x="60%" y="10%" fill="#FFF" className='lineText' textAnchor="end">Durée moyenne des</text>
                <text x="32%" y="20%" fill="#FFF" className='lineText' textAnchor="end">sessions</text>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis dataKey="day" stroke="#FFFFFF" axisLine={false} tickLine={false} />
                <YAxis hide="false" />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} /*activeDot={{ r: 8 }}*/ />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineChartComponent;
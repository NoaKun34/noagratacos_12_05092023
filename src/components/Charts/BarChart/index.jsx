import './BarChart.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    "day": "2020-07-01",
    "kilogram": 80,
    "calories": 240
  },
  {
    "day": "2020-07-02",
    "kilogram": 80,
    "calories": 220
  },
  {
    "day": "2020-07-03",
    "kilogram": 81,
    "calories": 280
  },
  {
    "day": "2020-07-04",
    "kilogram": 81,
    "calories": 290
  },
  {
    "day": "2020-07-05",
    "kilogram": 80,
    "calories": 160
  },
  {
    "day": "2020-07-06",
    "kilogram": 78,
    "calories": 162
  },
  {
    "day": "2020-07-07",
    "kilogram": 84,
    "calories": 390
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="customTooltip">
        <p className="pTooltip tooltipKg">{payload[0].value}kg</p>
        <p className="pTooltip tooltipKcal">{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
};

function BarChartComponent(props) {

  return props.chartData.data.sessions && (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={300}
        data={props.chartData.data.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" />
        <YAxis orientation="right" tickLine={false} axisLine={true} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" legendType="none" radius={[20, 20, 0, 0]} barSize={10} maxBarSize={10} />
        <Bar dataKey="calories" fill="#E60000" legendType="none" radius={[20, 20, 0, 0]} barSize={10} maxBarSize={10} />

      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent;
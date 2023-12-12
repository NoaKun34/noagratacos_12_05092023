import './RadarChart.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartComponent(props) {

  return (
    <div className='RadarContainer'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.chartData.data.data} margin={{ top: 0, right: 70, bottom: 0, left: 0 }}>
          <PolarGrid gridType="polygon" radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 'dataMax + 20']} tick={false} axisLine={false} />
          <Radar name="User" dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComponent;
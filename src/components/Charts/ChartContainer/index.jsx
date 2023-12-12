import './ChartContainer.css';
import BarChartComponent from '../BarChart';
import LineChartComponent from '../Linechart';
import RadarChartComponent from '../RadarChart';
import RadialBarChartComponent from '../RadialBarChart';

function ChartContainer(props) {

    return (
        <div className="chartContainer">
            <div className='barChartContainer'>
                <div className='titleContainer'>
                    <h2 className='titleText titleBarChart'>Activité quotidienne</h2>
                    <ul className='listContainer'>
                        <li className='listElement' id='barChartListElement1'>Poids (kg)</li>
                        <li className='listElement' id='barChartListElement2'>Calories brûlées (kCal)</li>
                    </ul>
                </div>
                <BarChartComponent chartData={props.chartData1} />
            </div>
            <div className='otherCharts'>
                <div className='otherChartContainer lineChartContainer'>
                    <LineChartComponent chartData={props.chartData2} />
                </div>
                <div className='otherChartContainer radarChartContainer'>
                    <RadarChartComponent chartData={props.chartData3} />
                </div>
                <div className='otherChartContainer radialChartContainer'>
                    <RadialBarChartComponent chartData={props.chartData4} />
                </div>
            </div>
        </div>
    )
}

export default ChartContainer;
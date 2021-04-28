import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = ({datapoints}) => {
    const values = datapoints.map( datapoint => datapoint.value);
    const maximum = Math.max(...values)
    return (
        <div className='chart'>
            {datapoints.map( point => <ChartBar value={point.value} maxValue={maximum} label={point.label} ></ChartBar>)}
        </div>
    )
}

export default Chart

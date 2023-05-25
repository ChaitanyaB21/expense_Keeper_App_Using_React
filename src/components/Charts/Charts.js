import React from "react";
import "./Charts.css";
import ChartBars from "./ChartBars";
const Charts = (props) => {
    const dataPointsValues = props.dataPoints.map((dataPoint) => {
        return(dataPoint.value);
    })
    const totalMaximum = Math.max(...dataPointsValues);       

    return (<div className="chart" >
        {props.dataPoints.map((datapoint) => {
            return (<ChartBars key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label} />)
        })}
    </div>)
}

export default Charts;
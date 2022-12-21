import React from "react";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
import "./Chart.css";
const Chart = (props) => {
  const valueArr = props.dataPoints.map((point) => point.value);
  const max = Math.max(...valueArr);

  return (
    <Card className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;

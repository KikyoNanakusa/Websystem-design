import React from "react";
import Plot from "react-plotly.js";

type LineChartProps = {
  xData: number[];
  yData: number[];
  title: string;
  width?: number;
  height?: number;
};

const LineChart: React.FC<LineChartProps> = ({ xData, yData, title, width = 700, height = 400 }) => {
  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          mode: "lines",
          type: "scatter",
        },
      ]}
      layout={{ title, width, height }}
    />
  );
};

export default LineChart;

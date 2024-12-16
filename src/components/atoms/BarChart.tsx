import React from "react";
import Plot from "react-plotly.js";

type BarChartProps = {
  xData: string[];
  yData: number[];
  title: string;
  width?: number;
  height?: number;
};

const BarChart: React.FC<BarChartProps> = ({ xData, yData, title, width = 700, height = 400 }) => {
  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          type: "bar",
          marker: { color: "rgba(0,0,255,0.6)" },
        },
      ]}
      layout={{ title, width, height }}
    />
  );
};

export default BarChart;

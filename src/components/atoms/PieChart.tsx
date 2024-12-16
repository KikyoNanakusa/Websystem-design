import React from "react";
import Plot from "react-plotly.js";

type PieChartProps = {
  labels: string[];
  values: number[];
  title: string;
  width?: number;
  height?: number;
};

const PieChart: React.FC<PieChartProps> = ({ labels, values, title, width = 700, height = 400 }) => {
  return (
    <Plot
      data={[
        {
          labels,
          values,
          type: "pie",
        },
      ]}
      layout={{ title, width, height }}
    />
  );
};

export default PieChart;

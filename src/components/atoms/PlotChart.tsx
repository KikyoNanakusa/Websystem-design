import React from "react";
import Plot from "react-plotly.js";

type PlotChartProps = {
  xData: (string | number)[];
  yData: number[];
  type: "bar" | "line";
  title: string;
  width?: number;
  height?: number;
};

const PlotChart: React.FC<PlotChartProps> = ({ xData, yData, type, title, width = 700, height = 400 }) => {
  const plotType = type === "line" ? "scatter" : "bar";
  const mode = type === "line" ? "lines" : undefined;

  return (
    <Plot
      data={[
        {
          x: xData,
          y: yData,
          type: plotType,
          mode: mode,
          marker: type === "bar" ? { color: "rgba(0,0,255,0.6)" } : undefined,
        },
      ]}
      layout={{ title, width, height }}
    />
  );
};

export default PlotChart;

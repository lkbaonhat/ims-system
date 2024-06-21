import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "A", color: "#C0EDF3" },
  { value: 20, label: "D", color: "#46DCD8"},
];

const size = {
  width: 230,
  height: 140,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 30,
}));

const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 40, outerRadius: 60 }]} {...size} 
    slotProps={{
        legend: { position: "bottom", hidden: true},
    }}
    >
      <PieCenterLabel>90%</PieCenterLabel>
    </PieChart>
  );
}

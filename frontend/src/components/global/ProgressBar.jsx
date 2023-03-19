import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      value <= 50
        ? theme.palette.mode === "light"
          ? "#1a90ff"
          : "#308fe8"
        : theme.palette.mode === "light"
        ? "#00c853"
        : "#66bb6a",
  },
}));

export default function CustomizedProgressBars({ value }) {
  return <BorderLinearProgress variant="determinate" value={value} />;
}

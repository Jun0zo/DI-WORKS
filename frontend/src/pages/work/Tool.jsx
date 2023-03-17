import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Layout from "src/components/layout/Layout";

import { useTheme } from "@mui/material/styles";

const Tool = () => {
  const { projectIdx, dataIdx } = useParams();
  // const projectIdx = 1;
  let [projectTitleOverviewData, setProjectTitleOverviewData] = useState({
    title: "",
    tags: [],
    dateRange: ["", ""],
    perticitanpts: -1,
    lastDats: -1,
  });
  let [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    console.log("theme check", theme.breakpoints.down("lg"));
    try {
      // const data = getData(projectIdx);
      const titleOverviewData = {
        title: "창의적 에세이 라벨링",
        tags: ["자연어", "스코어링"],
        dateRange: ["2023.03.01", "2024.03.01"],
        perticitanpts: 4,
        lastDays: 312,
      };

      setProjectTitleOverviewData(titleOverviewData);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  return (
    <Layout>
      <Box
        sx={{
          display: "grid",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Grid container>
          <Grid item xs={8} sx={{ backgroundColor: "red" }}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Tool;

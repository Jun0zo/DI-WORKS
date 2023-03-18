import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Rating, Button } from "@mui/material";

import Layout from "src/components/layout/Layout";

import { useTheme } from "@mui/material/styles";

import Evaluation from "src/components/work/tool/Evaluation";

import Card from "src/components/work/tool/Card";
import Overview from "src/components/work/tool/Overview";
import Header from "src/components/work/tool/Header";

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
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <Grid container sx={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            sx={{
              height: "200px",
              padding: "15px 10px",
            }}
          >
            <Header />
          </Grid>
          <Grid item xs={12} md={8} sx={{ height: "70vh" }}>
            <div>red</div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              item
              xs={12}
              sx={{
                padding: "10px",
              }}
            >
              <Card title="에세이 정보">
                <Overview />
              </Card>
            </Grid>

            <Grid item xs={12} sx={{ padding: "10px" }}>
              <Card title="레이블링">
                <Evaluation />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Tool;

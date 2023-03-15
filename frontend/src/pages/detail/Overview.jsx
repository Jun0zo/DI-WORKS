import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "src/components/layout/Layout";

import ProjectTitle from "src/components/detail/ProjectTitle";
import VerticalTabs from "src/components/detail/overview/VerticalTabs";
import Body from "src/components/detail/overview/Body";
import Navbar from "src/components/detail/Navbar";

import { useTheme } from "@mui/material/styles";

const Detail = () => {
  const { projectIdx } = useParams();
  // const projectIdx = 1;
  let [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    console.log("theme check", theme.breakpoints.down("lg"));
    try {
      // const data = getData(projectIdx);
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
        <div
          style={{ borderBottom: "1px solid #e4e4e4", marginBottom: "30px" }}
        >
          <ProjectTitle />
          <Navbar />
        </div>

        <div style={{ border: "1px solid #e4e4e4", borderRadius: 10 }}>
          <VerticalTabs />
        </div>
      </Box>
    </Layout>
  );
};

export default Detail;

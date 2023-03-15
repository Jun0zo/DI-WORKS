import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "src/components/layout/Layout";

import ProjectTitle from "src/components/detail/ProjectTitle";
import VerticalTabs from "src/components/detail/overview/VerticalTabs";
import Body from "src/components/detail/overview/Body";

const Detail = () => {
  const { projectIdx } = useParams();
  // const projectIdx = 1;
  let [error, setError] = useState(null);

  useEffect(() => {
    try {
      // const data = getData(projectIdx);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  return (
    <Layout>
      <Box sx={{ paddingLeft: 20, paddingRight: 20 }}>
        <ProjectTitle />
        <VerticalTabs />
      </Box>
    </Layout>
  );
};

export default Detail;

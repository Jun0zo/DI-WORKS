import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "src/components/layout/Layout";

import ProjectTitle from "src/components/work/ProjectTitle";
import VerticalTabs from "src/components/work/overview/VerticalTabs";
import Navbar from "src/components/work/Navbar";

import { P1, P2, P3 } from "../../components/global/work/Parags";

const Detail = () => {
  const { projectIdx } = useParams();
  // const projectIdx = 1;
  let [projectOverviewData, setProjectOverviewData] = useState([]);
  let [projectTitleOverviewData, setProjectTitleOverviewData] = useState({
    title: "",
    tags: [],
    dateRange: ["", ""],
    perticitanpts: -1,
    lastDats: -1,
  });
  let [error, setError] = useState(null);

  useEffect(() => {
    try {
      // const data = getData(projectIdx);
      const titleOverviewData = {
        title: "창의적 에세이 라벨링",
        tags: ["자연어", "스코어링"],
        dateRange: ["2023.03.01", "2024.03.01"],
        perticitanpts: 4,
        lastDays: 312,
      };

      const overviewData = [
        {
          title: "목표",
          content: <P1 />,
        },
        { title: "연구활동", content: <P2 /> },
        { title: "실험", content: <P3 /> },
      ];

      setProjectTitleOverviewData(titleOverviewData);
      setProjectOverviewData(overviewData);
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
          <ProjectTitle
            projectIdx={projectIdx}
            overviewData={projectTitleOverviewData}
          />
          <Navbar projectIdx={projectIdx} />
        </div>

        <div
          style={{
            border: "1px solid #e4e4e4",
            borderRadius: 10,
            width: "100%",
          }}
        >
          <VerticalTabs overviewData={projectOverviewData} />
        </div>
      </Box>
    </Layout>
  );
};

export default Detail;

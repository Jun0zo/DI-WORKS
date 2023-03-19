import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "src/components/layout/Layout";

import ProjectTitle from "src/components/work/ProjectTitle";
import VerticalTabs from "src/components/work/overview/VerticalTabs";
import Navbar from "src/components/work/Navbar";

import P1 from "./P1";

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
          content: `
          # 목표
        
          **1차 연도**
          
          1. 학습데이터 생성 및 검증을 위한 프로세스 진행 및 문제점 보완
          2. 평가자 교육 -> 총 1,967편의 한글 에세이와 총 1,800편의 영문 에세이 학습데이터 구축
          
          **2차 연도**
          
          1. 1차년도의 구축 경험을 바탕으로 Mechanical Turk 플랫폼과 클라우드 워커를 활용하여 추가적인 대용량 학습데이터 구축 예정(ASAP, ICLE, KLUE, AI-HUB 등에서 총 3만 건의 학습데이터)
          
        `,
        },
        { title: "연구활동", content: "우리의 연구활동은 ~" },
        { title: "실험", content: "우리의 실험은 ~" },
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

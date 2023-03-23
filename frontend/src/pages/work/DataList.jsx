import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Rating } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ProjectTitle from "src/components/work/ProjectTitle";
import Layout from "src/components/layout/Layout";
import Navbar from "src/components/work/Navbar";

function DataList() {
  const { projectIdx } = useParams();
  let [projectTitleOverviewData, setProjectTitleOverviewData] = useState({
    title: "",
    tags: [],
    dateRange: ["", ""],
    perticitanpts: -1,
    lastDats: -1,
  });

  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  // const columns = [
  //   { field: "id", headerName: "ID", width: 100 },
  //   { field: "name", headerName: "Name", width: 200 },
  //   { field: "email", headerName: "Email", width: 200 },
  //   { field: "phone", headerName: "Phone", width: 150 },
  // ];
  const columns = [
    { field: "id", headerName: "ID", sortable: false, disableColumnMenu: true },
    {
      field: "Date",
      headerName: "날짜",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Topic",
      headerName: "주제",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Type",
      headerName: "논문 종류",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Creativity Score",
      headerName: "평균 점수",
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ value }) => {
        console.log();
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="read-only"
              value={value["Total Score"]}
              readOnly
              sx={{ fontSize: "14px" }}
            />
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "레이블링",
      sortable: false,
      disableColumnMenu: true,
      renderCell: ({ value, row }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          123
        </Box>
      ),
    },
  ];

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `http://127.0.0.1:8000/essays?page=${page + 1}&page_size=100`
    );
    const data = await response.json();

    setRows(data.essays);
    setTotalRows(data.total_count);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const titleOverviewData = {
      title: "창의적 에세이 라벨링",
      tags: ["자연어", "스코어링"],
      dateRange: ["2023.03.01", "2024.03.01"],
      perticitanpts: 4,
      lastDays: 312,
    };

    setProjectTitleOverviewData(titleOverviewData);
  }, []);

  const handlePageChange = (params) => {
    console.log(params);
    setPage(params.page);
  };

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
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              pagination
              columns={columns}
              rows={rows}
              pageSize={100}
              rowCount={totalRows}
              onPaginationModelChange={handlePageChange}
              paginationMode="server"
              loading={loading}
            />
          </div>
        </div>
      </Box>
    </Layout>
  );
}

export default DataList;

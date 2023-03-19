import ProjectTitleImage from "src/projectTitleImage.png";
import { AccessTime, PeopleAlt, DateRange } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const ProjectTitle = (props) => {
  const { projectIdx, overviewData } = props;

  return (
    <div style={{ position: "relative" }}>
      <img
        src={ProjectTitleImage}
        alt=""
        style={{
          width: "100%",
          height: "210px",
          maxWidth: "100%",
          display: "block",
        }}
      />
      <Box
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "calc(100% - 28px * 2)",
          height: "calc(210px - 24px * 2)",
          padding: "24px 28px",
          color: "white",
        }}
      >
        <h2>{overviewData["title"]}</h2>
        <h3 style={{ fontWeight: 400 }}>
          {overviewData["tags"]
            .map((tag) => {
              return "#" + tag;
            })
            .join(" ")}
        </h3>
        <ul style={{ marginTop: 10, fontSize: 14 }}>
          <li
            style={{
              padding: "5px 0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DateRange style={{ fontSize: 14, marginRight: 3 }} />
            {`${overviewData["dateRange"][0]} ~ ${overviewData["dateRange"][1]}`}
          </li>
          <li
            style={{
              padding: "5px 0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PeopleAlt style={{ fontSize: 14, marginRight: 3 }} />
            {overviewData["perticitanpts"]}명
            <AccessTime
              style={{ fontSize: 14, marginLeft: 10, marginRight: 3 }}
            />
            {overviewData["lastDays"]}일
          </li>
        </ul>
        <Box>
          <a href={`/work/${projectIdx}/tool`}>
            <Button
              variant="contained"
              disableElevation
              sx={{ marginTop: "8px" }}
              color="info"
            >
              빠른 시작
            </Button>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectTitle;

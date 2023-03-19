import { Box } from "@mui/material";
import { AccessTime, PeopleAlt, DateRange } from "@mui/icons-material";

import headerBackground from "src/components/work/tool/header_background.jpeg";

const Header = (props) => {
  const { projectIdx, overviewData } = props;
  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: `url(${headerBackground})`,
        padding: "20px 20px",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}
    >
      <div style={{ color: "#F9F9FB" }}>
        <h2>{overviewData["title"]}</h2>
        <h4 style={{ fontWeight: 400 }}>
          {overviewData["tags"]
            .map((tag) => {
              return "#" + tag;
            })
            .join(" ")}
        </h4>
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
      </div>
    </Box>
  );
};

export default Header;

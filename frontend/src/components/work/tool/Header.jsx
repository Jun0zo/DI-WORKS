import { Box } from "@mui/material";

import headerBackground from "src/components/work/tool/header_background.jpeg";

const Header = () => {
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
        <h2>창의적 에세이</h2>
        <span>전체진행률</span>
      </div>
    </Box>
  );
};

export default Header;

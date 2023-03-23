import * as React from "react";

import { Link, useLocation } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const pages = [
  { label: "개요", addPath: "overview" },
  { label: "데이터 개요", addPath: "datainfo" },
  { label: "레이블링", addPath: "datalist" },
];

const Navbar = () => {
  const [curRootUrl, setCurRootUrl] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    let curRootUrl = location.pathname.split("/");
    curRootUrl.pop();
    curRootUrl = curRootUrl.join("/");

    setCurRootUrl(curRootUrl);
  }, [location.pathname]);

  return (
    <div style={{ marginTop: -3 }}>
      {pages.map(({ label, addPath }) => {
        return (
          <Button
            component={Link}
            to={curRootUrl + "/" + addPath}
            sx={{
              borderBottom:
                location.pathname === `${curRootUrl}/${addPath}`
                  ? "2px solid #3c7cde"
                  : "none",
              borderRadius: 0,
              height: 50,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight:
                  location.pathname === `${curRootUrl}/${addPath}` ? 900 : 500,
                color:
                  location.pathname === `${curRootUrl}/${addPath}`
                    ? "#3c7cde"
                    : "black",
              }}
            >
              {label}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};

export default Navbar;

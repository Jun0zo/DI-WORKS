import { Grid, Box } from "@mui/material";

import Layout from "../components/layout/Layout";
import FaceIcon from "@mui/icons-material/Face";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";

const Contact = () => {
  return (
    <Layout>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            border: "1px solid #aaa9a9",
            borderRadius: "12px",
            padding: "20px;",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box className="text-section" sx={{ display: "flex" }}>
            <Box>
              <img
                src="https://avatars.githubusercontent.com/u/37208901?v=4"
                alt=""
                width="100px"
                style={{
                  borderRadius: "1000px",
                  border: "1px solid #cfcfcf",
                }}
              />
            </Box>
            <Box
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ul style={{ lineHeight: "30px", color: "#434343" }}>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <FaceIcon /> 조준영
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <LocalPhoneIcon />
                  010-9257-9682
                </li>
                <li
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <HomeIcon />
                  경기도 고양시 일산서구
                </li>
              </ul>
            </Box>
          </Box>
          <Box
            className="link-section"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="instagram"
                  height={24}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="instagram"
                  height={24}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="instagram"
                  height={24}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Contact;

import headerImage from "./headerImage.png";

import { Grid, Button, Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Header = () => {
  return (
    <Grid
      container
      sx={{
        height: "350px",
        width: "100%",
        padding: "0 40px",
        backgroundColor: "#ececec",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Box>
          <h1 style={{ marginBottom: 4 }}>작업 목록</h1>
          <h3 style={{ fontWeight: 550 }}>
            인공지능 학습을 위한 학습데이터를 등록하고 공유해보세요
          </h3>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="info"
            startIcon={<AddCircleIcon />}
            sx={{ borderRadius: "15px" }}
          >
            데이터 추가
          </Button>
          <Button variant="outlined" color="info" sx={{ borderRadius: "15px" }}>
            최근 작업
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}
      >
        <img src={headerImage} alt="" style={{ width: "500px" }} />
      </Grid>
    </Grid>
  );
};

export default Header;

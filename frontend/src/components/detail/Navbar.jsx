import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div style={{ marginTop: -3 }}>
      <Button
        component={Link}
        to="/home"
        sx={{ borderBottom: "2px solid #3c7cde", borderRadius: 0, height: 50 }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 900 }}>개요</Typography>
      </Button>
      <Button component={Link} to="/about">
        <Typography sx={{ fontSize: 14, color: "rgb(66, 66, 66)" }}>
          데이터
        </Typography>
      </Button>
      <Button component={Link} to="/contact">
        <Typography sx={{ fontSize: 14, color: "rgb(66, 66, 66)" }}>
          규칙
        </Typography>
      </Button>
    </div>
  );
};

export default Navbar;

import { Box } from "@mui/material";

const Card = (props) => {
  const { children, title } = props;
  return (
    <div>
      <Box
        sx={{
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F9F9FB",
            position: "relative",
            top: 0,
            textAlign: "left",
            padding: "10px 20px;",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          {title}
        </Box>
        <Box sx={{ padding: "20px 10px" }}>{children}</Box>
      </Box>
    </div>
  );
};

export default Card;

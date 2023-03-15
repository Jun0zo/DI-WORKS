import * as React from "react";
import PropTypes from "prop-types";

import { Box, Typography, Tab, Tabs } from "@mui/material";
import {
  FlagCircleOutlined,
  PlaylistAddCheckCircle,
  ScienceRounded,
} from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const { overviewData } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 300,
        borderRadius: 5,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          backgroundColor: "rgb(250, 250, 250)",
        }}
      >
        {overviewData.map((overview) => (
          <Tab
            label={overview["title"]}
            {...a11yProps(0)}
            icon={<FlagCircleOutlined />}
            iconPosition="start"
            sx={{
              textAlign: "left",
              paddingLeft: 7,
              paddingRight: 7,
            }}
          />
        ))}
      </Tabs>
      {overviewData.map((overview, idx) => (
        <TabPanel value={value} index={idx}>
          {overview["content"]}
        </TabPanel>
      ))}
    </Box>
  );
}

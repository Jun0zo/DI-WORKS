import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Box, Typography, Tab, Tabs, Icon } from "@mui/material";
import {
  FlagCircleOutlined,
  PlaylistAddCheckCircle,
  ScienceRounded,
} from "@mui/icons-material";

import ReactMarkdown from "react-markdown";
const MarkDownStyle = styled.div`
  font-size: 1rem;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "70%", margin: "0 auto" }}
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

const MarkdownComponent = ({ content }) => {
  return (
    <MarkDownStyle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkDownStyle>
  );
};

const titleAndIconMaps = {
  목표: <FlagCircleOutlined />,
  연구활동: <PlaylistAddCheckCircle />,
  실험: <ScienceRounded />,
};

export default function VerticalTabs(props) {
  const { overviewData } = props;
  const [value, setValue] = React.useState(0);

  console.log(overviewData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
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
        {overviewData.map((overview, idx) => (
          <Tab
            key={idx}
            label={overview["title"]}
            {...a11yProps(0)}
            icon={
              titleAndIconMaps.hasOwnProperty(overview["title"]) ? (
                <Icon>{titleAndIconMaps[overview["title"]]}</Icon>
              ) : (
                <FlagCircleOutlined />
              )
            }
            iconPosition="top"
            sx={{
              width: 200,
              justifyContent: "left",
              paddingLeft: 7,
              paddingRight: 7,
            }}
          />
        ))}
      </Tabs>
      {overviewData.map((overview, idx) => (
        <TabPanel
          value={value}
          index={idx}
          key={idx}
          sx={{
            minWidth: "fit-content",
            maxWidth: "calc(100%-200px)",
          }}
        >
          {overview.content}
        </TabPanel>
      ))}
    </Box>
  );
}

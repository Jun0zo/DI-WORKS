import React from "react";

import { Box } from "@mui/material";

import Layout from "../components/layout/Layout";

import Banner from "src/components/home/Banner";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Box></Box>
    </Layout>
  );
};

export default Home;

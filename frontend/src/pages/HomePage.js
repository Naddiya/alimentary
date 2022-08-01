import React from "react";
import { Box } from "@mui/material";
import Bubble from "../components/Bubble";

import "../styles/home.scss";

const HomePage = () => {
  return (
    <Box className="home">
      <h2 className="home-title">Welcome to Alimentary.</h2>
      <Bubble />
      <h3 className="home-subtitle">Reasoned weight loss monitoring tool</h3>
    </Box>
  );
};

export default HomePage;

import React from "react";
import { Box } from "@mui/material";

import "../styles/homePage.scss";

const HomePage = () => {
  return (
    <Box className="homePage">
      <h2 className="homePage-title">Welcome to Alimentary.</h2>
      <h3 className="homePage-subtitle">
        Reasoned weight loss monitoring tool
      </h3>
    </Box>
  );
};

export default HomePage;

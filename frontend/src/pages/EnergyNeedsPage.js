import React from "react";
import { Box } from "@mui/material";
import "../styles/tools.scss";

import EnergyNeedsForm from "../components/tools/EnergyNeedsForm";

const EnergyNeedsPage = () =>
{
  return (
    <Box className="tools">
      <EnergyNeedsForm />
    </Box>
  );
};

export default EnergyNeedsPage;

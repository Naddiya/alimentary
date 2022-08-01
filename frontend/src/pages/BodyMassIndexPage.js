import React from "react";
import { Box } from "@mui/material";
import "../styles/tools.scss";

import BodyMassIndexForm from "../components/tools/forms/BodyMassIndexForm";

const BodyMassIndexPage = () => {
  return (
    <Box className="tools">
      <BodyMassIndexForm />
    </Box>
  );
};

export default BodyMassIndexPage;

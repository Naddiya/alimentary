import React from "react";
import { Box } from "@mui/material";
import "../styles/tools.scss";

import BodyMassIndexForm from "../components/tools/forms/bodyMassIndex/BodyMassIndexForm";
import BodyMassIndexLevel from "../components/tools/forms/bodyMassIndex/BodyMassIndexLevel";
import BodyMassIndexText from "../components/tools/forms/bodyMassIndex/BodyMassIndexText";

const BodyMassIndexPage = () => {
  return (
    <Box className="tools">
      <BodyMassIndexForm />
      <BodyMassIndexLevel />
      <BodyMassIndexText />
    </Box>
  );
};

export default BodyMassIndexPage;

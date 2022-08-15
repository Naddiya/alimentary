import React from "react";
import { Box } from "@mui/material";
import "../styles/tools.scss";

import BodyMassIndexForm from "../components/tools/bodyMassIndex/BodyMassIndexForm";
import BodyMassIndexLevel from "../components/tools/bodyMassIndex/BodyMassIndexLevel";
import BodyMassIndexText from "../components/tools/bodyMassIndex/BodyMassIndexText";

const BodyMassIndexPage = () =>
{
  return (
    <Box className="tools">
      <BodyMassIndexForm />
      <BodyMassIndexLevel />
      <BodyMassIndexText />
    </Box>
  );
};

export default BodyMassIndexPage;

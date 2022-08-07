import React from "react";
import { Box } from "@mui/system";
import "../styles/tools.scss";

import LossForm from "../components/tools/forms/lossForm";

const LossPage = () => {
  return (
    <Box className="tools">
      <LossForm />
    </Box>
  );
};

export default LossPage;

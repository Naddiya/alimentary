import React from "react";
import { Box } from "@mui/system";
import "../styles/tools.scss";

import DeficitsForm from "../components/tools/forms/deficitsForms";

const DeficitsPage = () => {
  return (
    <Box className="tools">
      <DeficitsForm />
    </Box>
  );
};

export default DeficitsPage;

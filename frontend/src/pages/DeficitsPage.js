import React from "react";
import { Box } from "@mui/system";
import "../styles/tools.scss";

import DeficitsForm from "../components/Forms/DeficitsForm";

const DeficitsPage = () => {
  return (
    <Box className="tools">
      <DeficitsForm />
    </Box>
  );
};

export default DeficitsPage;

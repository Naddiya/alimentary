import React from "react";
import { GiWeightScale } from "react-icons/gi";
import { Box } from "@mui/system";

const BodyMassIndexLevel = (bmi) => {
  const level = "";

  const BodyMassIndexLevel = (bmi) => {
    if (bmi < 18.5) {
      level = "normal";
    } else if (bmi >= 18.5 && bmi <= 25) {
      level = "insufficient";
    } else if (bmi >= 30 && bmi < 35) {
      level = "moderate-obesity";
    } else if (bmi >= 35 && bmi < 40) {
      level = "sever-obesity";
    } else if (bmi >= 40) {
      level = "morbid-obesity";
    }
  };

  return (
    <Box className="tools-bmi-level">
      <GiWeightScale
        className="tools-bmi-level-item"
        id="insufficient"
        size="50px"
        color="blue"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="normal"
        size="50px"
        color="green"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="moderate-obesity"
        size="50px"
        color="yellow"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="severe-obestity"
        size="50px"
        color="orange"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="morbid-obestity"
        size="50px"
        color="red"
      />
    </Box>
  );
};

export default BodyMassIndexLevel;

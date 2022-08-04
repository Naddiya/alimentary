import React from "react";
import { GiWeightScale } from "react-icons/gi";
import { Box } from "@mui/system";

const BodyMassIndexLevel = (bmi) => {
  const bmiLevel = (bmi) => {
    let result = "";
    if (bmi < 18.5) {
      result = "normal";
    } else if (bmi >= 18.5 && bmi <= 25) {
      result = "insufficient";
    } else if (bmi >= 30 && bmi < 35) {
      result = "class1_obesity";
    } else if (bmi >= 35 && bmi < 40) {
      result = "class2_obesity";
    } else if (bmi >= 40) {
      result = "class3_obesity";
    }
    return result;
  };

  const level = bmiLevel(40);

  return (
    <Box className="tools-bmi-level">
      <GiWeightScale
        className="tools-bmi-level-item"
        id="insufficient"
        size={level === "insufficient" ? "70px" : "50px"}
        color="blue"

        // opacity={level === "insufficient" ? 1 : 0.3}
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="normal"
        size={level === "normal" ? "70px" : "50px"}
        color="green"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="moderate-obesity"
        size={level === "class1_obesity" ? "70px" : "50px"}
        color="yellow"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="severe-obesity"
        size={level === "class2_obesity" ? "70px" : "50px"}
        color="orange"
      />
      <GiWeightScale
        className="tools-bmi-level-item"
        id="morbid-obesity"
        size={level === "class3_obesity" ? "70px" : "50px"}
        color="red"
      />
    </Box>
  );
};

export default BodyMassIndexLevel;

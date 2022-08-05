import React from "react";
import { GiWeightScale } from "react-icons/gi";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { bmiList } from "../../../../../data/data";

const BodyMassIndexLevel = () => {
  const { level } = useSelector((state) => state.bmi);

  return (
    <Box className="tools-bmi-level">
      {bmiList.map((e, id) => (
        <GiWeightScale
          className="tools-bmi-level-item"
          id={e.level}
          key={id}
          size={e.level === level ? "70px" : "50px"}
          color={e.color}
        />
      ))}
    </Box>
  );
};

export default BodyMassIndexLevel;

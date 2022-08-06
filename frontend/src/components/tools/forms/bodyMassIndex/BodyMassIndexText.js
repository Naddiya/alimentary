import React from "react";
import { useSelector } from "react-redux";
import { bmiList } from "../../../../../data/data";

const BodyMassIndexText = () => {
  const level = useSelector((state) => state.bmi.level);
  const currentLevel = (e) => e.level === level;
  const foundBmi = bmiList.find(currentLevel);
  const name = foundBmi?.name ?? "";

  const text = `Vous êtes en situation ${name}, selon l'oms : etblablab blbalabla`;

  return <div className="tools-bmi-text">{name && text}</div>;
};

export default BodyMassIndexText;

import React from "react";
import BMI from './BMI'
import EnergyRequirement from "./EnergyRequirement";
import '../styles/componentStyles/Balance.scss'
function Balance() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BMI />
      <EnergyRequirement />
    </div>
  );
}

export default Balance;
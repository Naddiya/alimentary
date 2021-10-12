import React from "react";
import BMI from './BMI'
import EnergyNeeds from "./EnergyRequirement";
import '../styles/Balance.scss'

function Balance() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BMI />
      <EnergyNeeds />
    </div>
  );
}

export default Balance;